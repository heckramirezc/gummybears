import $ from 'jquery';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import PropTypes from 'prop-types';
// import { Cookies } from 'react-cookie';
import _ from 'lodash';

import UI from './Page.ui';
import request from '../../bin/httpRequest';
// import { espots } from './../../store/ESpots/ESpots';
// import { addonsList } from './../../store/Addons/Addons';


class ProductList extends Component {
  // static propTypes = {
  //   cookies: PropTypes.instanceOf(Cookies).isRequired,
  // };

  constructor(props) {
    super(props);
    this.state = ({
      nombre: '',
      apellidos: '',
      telefono: '',
      correo: '',
      empresa: '',
      cargo: '',
      pais: '',
      mensaje: '',
      profesion: '',
      area: '',
      cv: null,
      pagesList: [],
      productList: [],
      espotsResponse: {},
      addonsList: [],
      currentPage: 1,
      itemsPerPage: 20,
      pageNumbers: [],
      page_elements: [],
      indexPage: {
        initPage: 0,
        endPage: 5,
      },
      error: '',
    });
    this.productsFilter = this.productsFilter.bind(this);
    this.resetCatalog = this.resetCatalog.bind(this);
    this.paginationClick = this.paginationClick.bind(this);
    this.handleOnChangePagination = this.handleOnChangePagination.bind(this);
    this.handleOnChangePaginationByPage = this.handleOnChangePaginationByPage.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
    this.handleContactoSubmit = this.handleContactoSubmit.bind(this);
    this.handleTrabajeSubmit = this.handleTrabajeSubmit.bind(this);
    this.handleSociosSubmit = this.handleSociosSubmit.bind(this);
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.productList();
    this.fetchPagesList();
    this.fetchPageElements();
    this.addonsList();
    this.espotsResponse();
  }

  setPaginatorIndex(currentPage) {
    if (this.state.pageNumbers.length > 5) {
      if (((currentPage + 2) <= this.state.pageNumbers.length) && ((currentPage - 2) >= 1)) {
        this.state.indexPage.initPage = currentPage - 3;
        this.state.indexPage.endPage = currentPage + 2;
      } else if (currentPage === 2) {
        this.state.indexPage.initPage = 0;
        this.state.indexPage.endPage = 5;
      }
    }
  }

  espotsResponse() {
    this.setState({ espotsResponse: {} });
    /* espots('Slider_Banners').then((res) => {
      this.setState({ espotsResponse: res });
    }); */
  }

  fetchPagesList() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/pages`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'paginas', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data.data, success: true });
        this.setState({ pagesList: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  fetchPageElements() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/settings?per_page=100`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'page_elements', success: false };
      if (!res.error) {
        const data = _.sortBy(res.data.data.filter(x => x.page_elements.length !== 0), val => parseInt(val.acf.posicion, 10));
        callback = Object.assign({}, callback, { data, success: true });
        this.setState({ page_elements: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  productList() {
    console.log('test');
    /* productList('prepago').then((res) => {
      this.totalNumberOfPages(res.data, this.state.itemsPerPage);
      this.setState({ productList: res.data, currentPage: 1 });
    }); */
  }

  addonsList() {
    console.log('test');
    /* addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.show_home === false), currentPage: 1 });
    }); */
  }

  resetCatalog() {
    this.productList();
    this.addonsList();
  }

  productsFilter(items) {
    this.totalNumberOfPages(items, this.state.itemsPerPage);
    this.setState({ productList: items });
  }

  paginationClick(event) {
    $('.pagination a').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({
      currentPage: Number(event.target.id),
    });
    window.scrollTo(0, 0);
  }

  handleTabs(e) {
    $('.catalog--tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.catalog--layout-1-section-1-form p').toggleClass('active');
    $('.catalog--banner-layout-1 img').toggleClass('active');
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (name !== 'cv') {
      this.setState({
        [name]: value,
      });
    } else {
      this.setState({
        [name]: target.files[0],
      });
    }
  }

  handleChangeReCaptcha = (value) => {
    if (value === null) this.setState({ error: 'Ha ocurrido un error. Valida que todos los datos esten ingresados correctamente o refresca esta página.' });
  };

  handleContactoSubmit(e) {
    e.preventDefault();
    this._reCaptchaRef.current.executeAsync().then((value) => {
      if (value !== null) {
        const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
        if (isIE) this.handleContactoData();
        else if (!isIE && $('form').valid()) this.handleContactoData();
      }
    });
  }

  handleTrabajeSubmit(e) {
    e.preventDefault();
    this._reCaptchaRef.current.executeAsync().then((value) => {
      if (value !== null) {
        const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
        if (isIE) this.handleTrabajeData();
        else if (!isIE && $('form').valid()) this.handleTrabajeData();
      }
    });
  }

  handleSociosSubmit(e) {
    e.preventDefault();
    this._reCaptchaRef.current.executeAsync().then((value) => {
      if (value !== null) {
        const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
        if (isIE) this.handleSociosData();
        else if (!isIE && $('form').valid()) this.handleSociosData();
      }
    });
  }

  handleContactoData() {
    const bodyFormData = new FormData();
    bodyFormData.append('nombre', this.state.nombre);
    bodyFormData.append('apellidos', this.state.apellidos);
    bodyFormData.append('telefono', this.state.telefono);
    bodyFormData.append('correo', this.state.correo);
    bodyFormData.append('empresa', this.state.empresa);
    bodyFormData.append('cargo', this.state.cargo);
    bodyFormData.append('pais', this.state.pais);
    bodyFormData.append('mensaje', this.state.mensaje);

    this.props.orderStore.contactenos(bodyFormData).then((response) => {
      if (response.data && response.data.data && response.data.data.message) {
        this.setState({ error: response.data.data.message });
      }
    }).catch(err => err);
  }

  handleTrabajeData() {
    const bodyFormData = new FormData();
    bodyFormData.append('nombre', this.state.nombre);
    bodyFormData.append('apellidos', this.state.apellidos);
    bodyFormData.append('correo', this.state.correo);
    bodyFormData.append('telefono', this.state.telefono);
    bodyFormData.append('profesion', this.state.profesion);
    bodyFormData.append('area', this.state.area);
    if (this.state.cv !== null) {
      bodyFormData.append('cv', this.state.cv, this.state.cv.name);
    }
    this.props.orderStore.trabaje(bodyFormData).then((response) => {
      if (response.data && response.data.data && response.data.data.message) {
        this.setState({ error: response.data.data.message });
      }
    }).catch(err => err);
  }

  handleSociosData() {
    const bodyFormData = new FormData();
    bodyFormData.append('nombre', this.state.nombre);
    bodyFormData.append('apellidos', this.state.apellidos);
    bodyFormData.append('telefono', this.state.telefono);
    bodyFormData.append('correo', this.state.correo);
    bodyFormData.append('empresa', this.state.empresa);
    bodyFormData.append('cargo', this.state.cargo);
    bodyFormData.append('pais', this.state.pais);
    // bodyFormData.append('mensaje', this.state.mensaje);

    this.props.orderStore.socios(bodyFormData).then((response) => {
      if (response.data && response.data.data && response.data.data.message) {
        this.setState({ error: response.data.data.message });
      }
    }).catch(err => err);
  }

  handleOnChangePagination(event) {
    $('.pagination a').removeClass('active');
    if (event.target.value !== '-') {
      this.totalNumberOfPages(this.state.productList, event.target.value);
      this.setState({ itemsPerPage: event.target.value, currentPage: 1 });
      // this.props.cookies.set('paginationId', event.target.value);
    }
    window.scrollTo(0, 0);
    setTimeout(() => $('#1.pagination--page').addClass('active'), 30);
  }

  handleOnChangePaginationByPage(event) {
    $('.pagination section a, #1').removeClass('active');
    if (event.target.id === 'pagination-first') {
      this.setState({ currentPage: 1 });
      setTimeout(() => $('.pagination section #1').addClass('active'), 30);
    } else if (event.target.className === 'pagination-prev') {
      if (this.state.currentPage !== 1) {
        this.setState({ currentPage: this.state.currentPage - 1 });
        const prevOfCurrent = `#${this.state.currentPage - 1}`;
        $(prevOfCurrent).addClass('active');
      }
    } else if (event.target.className === 'pagination-next') {
      if (this.state.currentPage !== this.state.pageNumbers.length) {
        this.setState({ currentPage: this.state.currentPage + 1 });
        const nextOfCurrent = `#${this.state.currentPage + 1}`;
        $(nextOfCurrent).addClass('active');
      }
    } else if (event.target.id === 'pagination-last') {
      this.setState({ currentPage: this.state.pageNumbers.length });
      const lastPage = `#${this.state.pageNumbers.length}`;
      setTimeout(() => $(lastPage).addClass('active'), 30);
    }
    window.scrollTo(0, 0);
  }

  totalNumberOfPages(productlist, itemsperpage) {
    const pageNumbers = [];
    if (productlist !== undefined && productlist.length) {
      for (let i = 1; i <= Math.ceil(productlist.length / itemsperpage); i += 1) pageNumbers.push(i);
    }
    this.setState({ pageNumbers });
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    let currentProductList = null;
    if (this.state.productList !== undefined) currentProductList = this.state.productList.slice(indexOfFirstTodo, indexOfLastTodo);
    let range = currentPage;
    if (currentPage <= 2) {
      range = 2;
    } else if (currentPage === this.state.pageNumbers.length) {
      range = currentPage - 2;
    }
    this.setPaginatorIndex(range);
    return (
      <UI
        productList={currentProductList}
        productsFilter={this.productsFilter}
        resetCatalog={this.resetCatalog}
        eSpot={this.state.espotsResponse}
        paginationClick={this.paginationClick}
        pageNumbers={this.state.pageNumbers}
        handleOnChangePagination={this.handleOnChangePagination}
        indexPage={this.state.indexPage}
        handleOnChangePaginationByPage={this.handleOnChangePaginationByPage}
        itemsPerPageValue={itemsPerPage}
        addonsList={this.state.addonsList}
        pagesList={this.state.pagesList}
        handleTabs={this.handleTabs}
        pageElements={this.state.page_elements}
        handleContactoSubmit={this.handleContactoSubmit}
        handleTrabajeSubmit={this.handleTrabajeSubmit}
        handleSociosSubmit={this.handleSociosSubmit}
        handleChange={this.handleChange}
        handleChangeReCaptcha={this.handleChangeReCaptcha}
        reCaptchaRef={this._reCaptchaRef}
        error={this.state.error}
      />
    );
  }
}

// export default withCookies(ProductList), inject('orderStore');
export default inject('orderStore')(observer(ProductList));
