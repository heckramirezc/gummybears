import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import UI from './Industry.ui';
import { solutionsList, industriesList, productsList, tecnologiesType } from './../../store/Catalog/Catalog';
// import { espots } from '../../store/ESpots/ESpots';
// import { addonsList } from '../../store/Addons/Addons';


class ProductList extends Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = ({
      solutionsList: [],
      industriesList: [],
      productsList: [],
      tecnologiesType: [],
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
    this.resetCategory = this.resetCategory.bind(this);
    this.paginationClick = this.paginationClick.bind(this);
    this.handleOnChangePagination = this.handleOnChangePagination.bind(this);
    this.handleOnChangePaginationByPage = this.handleOnChangePaginationByPage.bind(this);
    this.handleTabs = this.handleTabs.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.solutionsList();
    this.industriesList();
    this.productsList();
    this.tecnologiesType();
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

  solutionsList() {
    solutionsList().then((res) => {
      this.setState({ solutionsList: res.data });
    });
  }

  industriesList() {
    industriesList().then((res) => {
      this.setState({ industriesList: res.data });
    });
  }

  productsList() {
    productsList().then((res) => {
      this.setState({ productsList: res.data });
    });
  }

  tecnologiesType() {
    tecnologiesType().then((res) => {
      this.setState({ tecnologiesType: res.data });
    });
  }

  addonsList() {
    this.setState({ addonsList: [] });
    /* addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.show_home === false), currentPage: 1 });
    }); */
  }

  resetCategory() {
    this.solutionsList();
    this.addonsList();
  }

  productsFilter(items) {
    this.totalNumberOfPages(items, this.state.itemsPerPage);
    this.setState({ solutionsList: items });
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
    $('.product--tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.grid-item-sap, .grid-item-ms').toggleClass('active');
  }

  handleOnChangePagination(event) {
    $('.pagination a').removeClass('active');
    if (event.target.value !== '-') {
      this.totalNumberOfPages(this.state.solutionsList, event.target.value);
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

  totalNumberOfPages(solutionslist, itemsperpage) {
    const pageNumbers = [];
    if (solutionslist !== undefined && solutionslist.length) {
      for (let i = 1; i <= Math.ceil(solutionslist.length / itemsperpage); i += 1) pageNumbers.push(i);
    }
    this.setState({ pageNumbers });
  }

  render() {
    return (
      <UI
        solutionsList={this.state.solutionsList}
        industriesList={this.state.industriesList}
        productsList={this.state.productsList}
        tecnologiesType={this.state.tecnologiesType}
        handleTabs={this.handleTabs}
        productsFilter={this.productsFilter}
        resetCategory={this.resetCategory}
        eSpot={this.state.espotsResponse}
        paginationClick={this.paginationClick}
        pageNumbers={this.state.pageNumbers}
        handleOnChangePagination={this.handleOnChangePagination}
        indexPage={this.state.indexPage}
        handleOnChangePaginationByPage={this.handleOnChangePaginationByPage}
        addonsList={this.state.addonsList}
      />
    );
  }
}

export default withCookies(ProductList);
