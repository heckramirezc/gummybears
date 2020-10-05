import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

// Request
import validate from '../../helpers/validate_form';
import { categoriesList, postsList } from './../../store/Catalog/Catalog';
import request from '../../bin/httpRequest';

// UI
import UI from './BlogCategory.ui';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      categoriesList: [],
      postsList: [],
      social_media: [],
      email: '',
      error: '',
    });
    // Binds
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.categoriesList();
    this.postsList();
    this.fetchRedesSociales();
    validate();
    document.getElementById('initial').scrollIntoView(true);
  }

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

  render() {
    return (
      <UI
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
