import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

// Request
import { categoriesList, postsList } from './../../store/Catalog/Catalog';
import request from '../../bin/httpRequest';

// UI
import UI from './Post.ui';

/**
 * Product Detail
 */

class Product extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = ({
      productInfo: {},
      categoriesList: [],
      postsList: [],
      social_media: [],
      dataCatalog: [],
      initColor: '',
      initSize: '',
      images: [],
      name: '',
      email: '',
      error: '',
      pricing: {},
      isAvailable: '',
    });
    // Binds
    this.colorSelected = this.colorSelected.bind(this);
    this.sizeSelected = this.sizeSelected.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.categoriesList();
    this.postsList();
    this.fetchRedesSociales();
    // this.catalogResponse();
    document.getElementById('initial').scrollIntoView(true);
  }

  componentDidUpdate(prevProps) {
    const elementos = document.getElementsByClassName('lazyload');
    if (elementos && elementos.length && elementos.length !== 0) {
      Array.prototype.forEach.call(elementos, (elemento) => {
        elemento.src = elemento.dataset.src;
      });
      if (prevProps.location.pathname !== this.props.location.pathname) {
        // this.catalogResponse();
        setTimeout(() => { window.scrollTo(0, 0); }, 1000);
      }
    }
  }

  componentWillUnmount() {
    // $('.zoomContainer').remove();
  }

  getInventoryStatus = async (partNumber) => {
    const inventoryStatus = await this.props.catalogStore.inventoryStatusService(partNumber);
    if (inventoryStatus && inventoryStatus.data && inventoryStatus.data.data) {
      if (inventoryStatus.data.data.status === 'available') {
        this.setState({ isAvailable: 'available' });
      } else this.setState({ isAvailable: 'unavailable' });
    }
  }

  // Product Request

  categoriesList() {
    categoriesList().then((res) => {
      this.setState({ categoriesList: res.data });
    });
  }

  postsList() {
    postsList().then((res) => {
      this.setState({ postsList: res.data });
    });
  }

  fetchRedesSociales() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/settings?per_page=100`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'redes_sociales', success: false };
      if (!res.error) {
        const data = _.sortBy(res.data.data.filter(x => x.social_media.length !== 0), val => parseInt(val.acf.posicion, 10));
        callback = Object.assign({}, callback, { data, success: true });
        this.setState({ social_media: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  colorSelected(obj) {
    this.setState({
      initColor: obj.color,
      images: obj.images,
      pricing: obj.pricing,
      name: obj.name,
    });
    this.getInventoryStatus(obj.part_number);
  }

  sizeSelected(obj) {
    this.setState({
      initSize: obj.size,
      pricing: obj.pricing,
    });
    this.getInventoryStatus(obj.part_number);
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
    if (isIE) this.handleContactoData();
    else if (!isIE && $('form').valid()) this.handleNewsletter();
  }

  handleNewsletter() {
    const params = {
      email: this.state.email,
    };

    this.props.orderStore.subscribe(params).then((response) => {
      console.log('response', response);
      if (response.success) {
        this.setState({ error: 'Su registro se ha realizado con éxito.' });
      } else {
        this.setState({ error: 'Ha ocurrido un error, intente más tarde.' });
      }
    }).catch(err => err);
  }

  handleTabs(e) {
    $('.product--tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.product--description, .product--datasheet').toggleClass('active');
  }

  handleSwitch(e) {
    $('.product--description-switch a').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('.product--description-switch-content > section').hide();
    if ($(e.currentTarget).hasClass('first')) {
      $('.first-content').fadeIn();
    }
    if ($(e.currentTarget).hasClass('second')) {
      $('.second-content').fadeIn();
    }
    if ($(e.currentTarget).hasClass('third')) {
      $('.third-content').fadeIn();
    }
  }

  handleBlocks(e) {
    $(e.currentTarget).find('span').toggleClass('fa-plus fa-minus');
    $(e.currentTarget).next('article').slideToggle();
  }

  render() {
    return (
      <UI
        product={this.state.productInfo}
        productName={this.state.name}
        isAvailable={this.state.isAvailable}
        postsList={this.state.postsList}
        categoriesList={this.state.categoriesList}
        socialData={this.state.social_media}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        error={this.state.error}
      />
    );
  }
}

Product.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  catalogStore: PropTypes.shape({
    catalog: PropTypes.func,
    inventoryStatusService: PropTypes.func,
  }).isRequired,
};

export default inject('orderStore')(observer(Product));
