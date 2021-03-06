import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';
import _ from 'lodash';

// Helpers
import request from '../../bin/httpRequest';
// import locaLayout from './data.json';

// Components
import DefaultHeader from './../../components/Headers/DefaultHeader';
import DefaultFooter from './../../components/Footer/DefaultFooter';
import { solutionsList, industriesList, tecnologiesType } from './../../store/Catalog/Catalog';

class DefaultLayout extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(...props);
    this.state = {
      layout: {},
      social_media: [],
      menu_principal: [],
      taxonomias_productos: [],
      solutionsList: [],
      industriesList: [],
      tecnologiesType: [],
      pagesList: [],
    };
  }

  componentDidMount() {
    this.fetchMenu();
    this.fetchTaxonomias();
    this.fetchRedesSociales();
    this.solutionsList();
    this.industriesList();
    this.tecnologiesType();
  }

  componentDidUpdate() {
    document.getElementById('app').scrollIntoView(true);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchMenu() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE_V1}/menus/v1/menus/principal`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'menu_principal', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data.data.items, success: true });
        this.setState({ menu_principal: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  fetchTaxonomias() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/taxonomies`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'taxonomias', success: false };
      if (!res.error) {
        const dataFiltered = Object.values(res.data.data)
          .filter(value => value.types[0] === 'products');
        callback = Object.assign({}, callback, { data: dataFiltered, success: true });
        this.setState({ taxonomias_productos: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
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

  tecnologiesType() {
    tecnologiesType().then((res) => {
      this.setState({ tecnologiesType: res.data });
    });
  }

  render() {
    return (
      <div id="layout-default">
        <DefaultHeader layoutdata={this.state.layout} socialdata={this.state.social_media} menudata={this.state.menu_principal} solutionsList={this.state.solutionsList} industriesList={this.state.industriesList} tecnologiesType={this.state.tecnologiesType} productsType={this.state.taxonomias_productos} />
        <div id="initial">
          {this.props.children}
        </div>
        <DefaultFooter layoutdata={this.state.layout} socialdata={this.state.social_media} />
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withCookies(DefaultLayout);
