import React, { Component } from 'react';
import { withCookies } from 'react-cookie';

import UI from './SubCategory.ui';
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

  render() {
    return (
      <UI
        solutionsList={this.state.solutionsList}
        industriesList={this.state.industriesList}
        productsList={this.state.productsList}
        tecnologiesType={this.state.tecnologiesType}
        resetCategory={this.resetCategory}
      />
    );
  }
}

export default withCookies(ProductList);
