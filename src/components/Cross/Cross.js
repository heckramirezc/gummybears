import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import PropTypes from 'prop-types';
import { addonsList } from './../../store/Addons/Addons';

// UI
import UI from './Cross.ui';

class Cross extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      addonsList: [],
    };
  }

  componentDidMount() {
    this.addonsList();
  }

  addonsList() {
    addonsList().then((res) => {
      this.setState({ addonsList: res.data[0].filter(x => x.enabled === true && x.show_home === false) });
    });
  }

  render() {
    const { catalogResponse } = this.props.catalogStore;
    return (
      <UI products={catalogResponse.data} addOnsList={this.state.addonsList} />
    );
  }
}

Cross.propTypes = {
  catalogStore: PropTypes.shape({
    catalogResponse: PropTypes.shape({}),
  }),
};

Cross.defaultProps = {
  catalogStore: () => {},
};

export default inject('catalogStore')(observer(Cross));
