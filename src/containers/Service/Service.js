import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

// Request
import { servicesList } from './../../store/Catalog/Catalog';

// UI
import UI from './Service.ui';

class Product extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = ({
      servicesList: [],
    });
  }

  componentDidMount() {
    this.servicesList();
    document.getElementById('initial').scrollIntoView(true);
  }

  servicesList() {
    servicesList().then((res) => {
      this.setState({ servicesList: res.data });
    });
  }

  render() {
    return (
      <UI
        servicesList={this.state.servicesList}
      />
    );
  }
}

export default inject('catalogStore')(observer(Product));
