import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

// UI
import UI from './DashboardAccount.ui';

class DashboardAccount extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);
    this.state = {};
  }

  componentDidMount() {
    this.person();
  }

  person = async () => {
    const person = await this.props.accountStore.dataPerson();
    if (person && !person.success) {
      this.context.router.history.push('/not-found');
    }
  }

  render() {
    return (
      <UI />
    );
  }
}

DashboardAccount.propTypes = {
  accountStore: PropTypes.shape({
    dataPerson: PropTypes.func,
  }),
};


DashboardAccount.defaultProps = {
  accountStore: {},
};

export default inject('accountStore')(observer(DashboardAccount));
