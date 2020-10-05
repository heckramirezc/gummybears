import $ from 'jquery';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import _ from 'lodash';

import validate from '../../helpers/validate_form';
import UI from './Page.ui';
import request from '../../bin/httpRequest';


class ProductList extends Component {
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
      page_elements: [],
    });
    this.handleTabs = this.handleTabs.bind(this);
    this.handleContactoSubmit = this.handleContactoSubmit.bind(this);
    this.handleTrabajeSubmit = this.handleTrabajeSubmit.bind(this);
    this.handleSociosSubmit = this.handleSociosSubmit.bind(this);
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.fetchPagesList();
    this.fetchPageElements();
    validate();
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

  render() {
    return (
      <UI
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

export default inject('orderStore')(observer(ProductList));
