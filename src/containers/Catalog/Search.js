import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import UI from './Search.ui';
import { addonsList } from './../../store/Addons/Addons';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = ({
      productList: [],
    });
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    this.productList();
  }

  async productList() {
    const pathname = this.context.router.history.location.pathname;
    const keyword = pathname.split('/');
    let addonslist;
    await addonsList().then((res) => {
      addonslist = res.data[0].filter(x => x.enabled === true && x.auto_cart === true);
    });
    console.log('addonslist', addonslist);
    this.props.catalogStore.search({ keyword: keyword[keyword.length - 1], addonsList: addonslist });
  }

  render() {
    const searchResult = this.props.catalogStore.searchResult;
    let productList = [];
    if (searchResult && searchResult.data && searchResult.data.data) {
      productList = searchResult.data.data;
    }

    return (
      <UI
        productList={productList}
        addonsList={this.state.addonsList}
      />
    );
  }
}

Search.propTypes = {
  catalogStore: PropTypes.shape({
    search: PropTypes.func,
    searchResult: PropTypes.shape({
      data: PropTypes.shape({
        data: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export default inject('catalogStore')(observer(Search));
