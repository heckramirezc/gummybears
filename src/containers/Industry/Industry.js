import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import _ from 'lodash';

import UI from './Industry.ui';
import { solutionsList, industriesList, productsList, tecnologiesType } from './../../store/Catalog/Catalog';
import request from '../../bin/httpRequest';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      solutionsList: [],
      industriesList: [],
      productsList: [],
      tecnologiesType: [],
      clientes: [],
      categoriasClientes: [],
    });
    this.resetCategory = this.resetCategory.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.solutionsList();
    this.industriesList();
    this.productsList();
    this.tecnologiesType();
    this.fetchClientes();
    this.fetchCategoriasClientes();
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

  fetchClientes() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/settings?per_page=100`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'clientes', success: false };
      if (!res.error) {
        const data = _.sortBy(res.data.data.filter(x => x.clientes.length !== 0), val => parseInt(val.acf.posicion, 10));
        callback = Object.assign({}, callback, { data, success: true });
        this.setState({ clientes: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  fetchCategoriasClientes() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/clientes`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'categorias-clientes', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data.data, success: true });
        this.setState({ categoriasClientes: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  resetCategory() {
    this.solutionsList();
  }

  productsFilter(items) {
    this.totalNumberOfPages(items, this.state.itemsPerPage);
    this.setState({ solutionsList: items });
  }

  render() {
    return (
      <UI
        solutionsList={this.state.solutionsList}
        industriesList={this.state.industriesList}
        productsList={this.state.productsList}
        tecnologiesType={this.state.tecnologiesType}
        clientes={this.state.clientes}
        categoriasClientes={this.state.categoriasClientes}
        resetCategory={this.resetCategory}
      />
    );
  }
}

export default withCookies(ProductList);
