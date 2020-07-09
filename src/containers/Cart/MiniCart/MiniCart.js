import React, { Component } from 'react';
import $ from 'jquery';

// UI
import UI from './MiniCart.ui';

class MiniCart extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  isActive(e) {
    $(e.currentTarget).toggleClass('active');
  }

  isActiveBarBox = (e) => {
    $(e.currentTarget).closest('.additions--bar').find('.additions--bar-box').removeClass('active');
    $(e.currentTarget).toggleClass('active');
  }

  render() {
    return (
      <UI />
    );
  }
}

export default MiniCart;
