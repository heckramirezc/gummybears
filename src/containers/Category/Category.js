import $ from 'jquery';
import React, { Component } from 'react';
import { withCookies } from 'react-cookie';

import UI from './Category.ui';
import { solutionsList, industriesList, productsList, tecnologiesType } from './../../store/Catalog/Catalog';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      solutionsList: [],
      industriesList: [],
      productsList: [],
      tecnologiesType: [],
    });
    this.resetCategory = this.resetCategory.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.solutionsList();
    this.industriesList();
    this.productsList();
    this.tecnologiesType();
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

  resetCategory() {
    this.solutionsList();
  }

  handleTabs(e) {
    $('.product--tabs a').removeClass('active');
    $(e.currentTarget).addClass('active');
    $('.grid-item-sap, .grid-item-ms').toggleClass('active');
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
