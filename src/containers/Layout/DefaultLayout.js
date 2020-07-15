import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';

// Helpers
import request from '../../bin/httpRequest';
// import locaLayout from './data.json';

// Components
import DefaultHeader from './../../components/Headers/DefaultHeader';
import DefaultFooter from './../../components/Footer/DefaultFooter';
import CheckoutHeader from './../../components/Headers/CheckoutHeader';
import CheckoutFooter from './../../components/Footer/CheckoutFooter';

class DefaultLayout extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(...props);
    this.state = {
      layout: {},
      social_media: [],
    };
  }

  componentDidMount() {
    this.fetchLayout();
    this.fetchRedesSociales();
  }

  componentDidUpdate() {
    document.getElementById('app').scrollIntoView(true);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchLayout() {
    this.setState({ layout: {} });
    /* const options = {
      method: 'GET',
      url: process.env.LAYOUT,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'layout', success: false };
      if (!res.error) {
        // firefox request data null on production
        if (res.data.data !== null) callback = Object.assign({}, callback, { data: res.data.data, success: true });
        else callback = Object.assign({}, callback, { data: locaLayout, success: true });

        this.setState({ layout: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    }); */
  }

  fetchRedesSociales() {
    const options = {
      method: 'GET',
      url: `${process.env.SERVICE}/settings`,
    };
    request.genericHandler(options).then((res) => {
      let callback = { action: 'redes_sociales', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data.data.filter(x => x.social_media), success: true });
        this.setState({ social_media: callback.data });
      } else {
        callback = Object.assign({}, callback, { error: res.error, success: false });
      }
      return callback;
    });
  }

  render() {
    return (
      <div id="layout-default">
        {(this.context.router.route.location.pathname.match(/\/checkout/) ? <CheckoutHeader /> : <DefaultHeader layoutdata={this.state.layout} socialdata={this.state.social_media} />)}
        <div id="initial">
          {this.props.children}
        </div>
        {(this.context.router.route.location.pathname.match(/\/checkout/) ? <CheckoutFooter layoutdata={this.state.layout} /> : <DefaultFooter layoutdata={this.state.layout} socialdata={this.state.social_media} />)}
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withCookies(DefaultLayout);
