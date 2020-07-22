import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import UI from './AboutUs.ui';
import { servicesList } from './../../store/Catalog/Catalog';
// import { espots } from './../../store/ESpots/ESpots';
// import { addonsList } from './../../store/Addons/Addons';


class ProductList extends Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = ({
      productList: [],
      servicesList: [],
      espotsResponse: {},
      addonsList: [],
      currentPage: 1,
      itemsPerPage: 20,
      pageNumbers: [],
      indexPage: {
        initPage: 0,
        endPage: 5,
      },
    });
    this.productsFilter = this.productsFilter.bind(this);
    this.resetCatalog = this.resetCatalog.bind(this);
    this.paginationClick = this.paginationClick.bind(this);
    this.handleOnChangePagination = this.handleOnChangePagination.bind(this);
    this.handleOnChangePaginationByPage = this.handleOnChangePaginationByPage.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.servicesList();
    this.productList();
    this.addonsList();
    this.espotsResponse();
    this.startPagination();
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

  startPagination() {
    this.setState({ itemsPerPage: (this.props.cookies.get('paginationId') || 20) });
    this.props.cookies.remove('paginationId');
  }

  espotsResponse() {
    this.setState({ espotsResponse: {} });
    /* espots('Slider_Banners').then((res) => {
      this.setState({ espotsResponse: res });
    }); */
  }

  servicesList() {
    servicesList().then((res) => {
      this.setState({ servicesList: res.data });
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

  handleOnChangePagination(event) {
    $('.pagination a').removeClass('active');
    if (event.target.value !== '-') {
      this.totalNumberOfPages(this.state.productList, event.target.value);
      this.setState({ itemsPerPage: event.target.value, currentPage: 1 });
      this.props.cookies.set('paginationId', event.target.value);
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
        servicesList={this.state.servicesList}
      />
    );
  }
}

export default withCookies(ProductList);
