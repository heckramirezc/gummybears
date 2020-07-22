import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import { observer, inject } from 'mobx-react';

// Request
import { servicesList } from './../../store/Catalog/Catalog';
import product from './../../store/Product/Product';

// UI
import UI from './Service.ui';

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
      servicesList: [],
      dataCatalog: [],
      initColor: '',
      initSize: '',
      images: [],
      name: '',
      pricing: {},
      isAvailable: '',
    });
    // Binds
    this.colorSelected = this.colorSelected.bind(this);
    this.sizeSelected = this.sizeSelected.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  componentDidMount() {
    this.servicesList();
    this.productResponse(this.props.location.pathname);
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
        this.productResponse(this.props.location.pathname);
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

  servicesList() {
    servicesList().then((res) => {
      this.setState({ servicesList: res.data });
    });
  }
  productResponse(path) {
    product(path).then((res) => {
      const category = res.data;
      let slug;
      if (category && category.data && category.data.length && category.data[0].locales && category.data[0].locales.es_sv && category.data[0].locales.es_sv.categories) {
        slug = category.data[0].locales.es_sv.categories[0].slug.split('/');
        slug = slug[0];
      }

      const partNumbertoFilter = path.split('/');
      _.remove(res.data.data, (products) => {
        if (products.part_number && products.part_number === partNumbertoFilter[partNumbertoFilter.length - 1]) {
          return false;
        }
        return true;
      });

      if (slug) this.props.catalogStore.catalog(slug);

      this.setState({ productInfo: res.data, slug });

      if (res && res.data && res.data.data.length) {
      // if all items' product is available false redirect home
        let isAvailableCount = 0;
        const availableItems = [];
        let firsAvailableItem = 0;
        res.data.data[0].items.map((item, index) => {
          if (item.available === false) {
            isAvailableCount += 1;
          } else {
            availableItems.push(index);
          }
          return false;
        });

        if (isAvailableCount === res.data.data[0].items.length) this.context.router.history.push('/');

        firsAvailableItem = availableItems[0] !== undefined ? availableItems[0] : 0;

        const initColor = _.filter(res.data.data[0].items[firsAvailableItem].attributes, { name: 'def-color' });
        const initSize = _.filter(res.data.data[0].items[firsAvailableItem].attributes, { name: 'def-capacidad' });
        const images = res.data.data[0].items[firsAvailableItem].images || './../../../public/media/demo/claro.png';
        const pricing = res.data.data[0].items[firsAvailableItem].pricing;
        const { name } = res.data.data[0].items[firsAvailableItem].locales.es_sv;
        const partNumber = res.data.data[0].items[firsAvailableItem].part_number;
        this.getInventoryStatus(partNumber);

        this.setState({ initColor: initColor[0].value, initSize: initSize[0].value, images, pricing, name });
      }
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
        servicesList={this.state.servicesList}
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

export default inject('catalogStore')(observer(Product));
