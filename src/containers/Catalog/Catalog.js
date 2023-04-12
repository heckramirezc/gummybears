import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import _ from 'lodash';

import UI from './Catalog.ui';
import { categoriesList, postsList, servicesList } from './../../store/Catalog/Catalog';
import request from '../../bin/httpRequest';


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      servicesList: [],
      categoriesList: [],
      postsList: [],
      clientes: [],
      banners: [],
      categoriasClientes: [],
    });
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.fetchBanners();
    this.servicesList();
    this.categoriesList();
    this.postsList();
    this.fetchClientes();
    this.fetchCategoriasClientes();
    const script = document.createElement('script');
    script.src = 'https://s.cliengo.com/weboptimizer/5a778044e4b07055bb4d45b1/5a778055e4b032738dd21403.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
  }

  componentDidUpdate() {
    if (window.location.hash) {
      if (document.getElementById(window.location.hash.slice(1))) {
        document.getElementById(window.location.hash.slice(1)).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  servicesList() {
    servicesList().then((res) => {
      this.setState({ servicesList: res.data });
    });
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

  fetchBanners() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/settings?per_page=100`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'banners', success: false };
      if (!res.error) {
        const data = _.sortBy(res.data.data.filter(x => x.banners.length !== 0), val => parseInt(val.acf.posicion, 10));
        callback = Object.assign({}, callback, { data, success: true });
        this.setState({ banners: callback.data });
      } else {
        console.log('error', res.error);
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
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

  render() {
    return (
      <UI
        banners={this.state.banners}
        servicesList={this.state.servicesList}
        postsList={this.state.postsList}
        categoriesList={this.state.categoriesList}
        clientes={this.state.clientes}
        categoriasClientes={this.state.categoriasClientes}
      />
    );
  }
}

export default withCookies(ProductList);
