import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import listSelector from '../../helpers/liselector';
import { addonsList } from './../../store/Addons/Addons';

// const hide = {
//   display: 'none',
// };

const SearchResults = ({ data, listSelected }) => (
  <li className="autosuggest" role="presentation" tabIndex="-1" onClick={e => listSelected(e, data.term)}>
    <a onClick={() => { document.querySelector('#search-box').value = ''; }}>{data.term}</a>
  </li>
);

class SearchBox extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(...props) {
    super(...props);

    this.internalData = {
      search: '',
    };

    this.state = {
      autoSuggest: [],
    };
  }

  componentDidMount() {
    listSelector(this.completeSentence);
  }

  /**
   @augments new information to search
   */

  handleChange = async (e, data) => {
    const keys = data.split('.');
    console.log(keys);

    if (e.target.value && e.target.value.length && e.target.value.length >= 3) {
      this.props.catalogStore.autoSuggest({ keyword: e.target.value }).then((res) => {
        if (res.data && res.success) {
          this.setState({ autoSuggest: res.data.data.Keyword });
        }
      });
    }
  }

  handleSubmit = async (e, data) => {
    e.preventDefault();
    let searchData = data;
    if (searchData === undefined) searchData = this.state.internalData.search;
    let addons;
    await addonsList().then((res) => {
      addons = res.data[0].filter(x => x.enabled === true && x.auto_cart === true);
    });
    console.log('addons', addons);
    this.props.catalogStore.search({ keyword: searchData, addonsList: addons }).then((res) => {
      console.log('search: ', res);
      if (res.success && res.action === 'search') {
        if (searchData) {
          this.context.router.history.push(`/search/${searchData}`);
        } else {
          this.context.router.history.push(`/search/${this.internalData.search}`);
        }
        this.setState({ autoSuggest: [] });
        document.querySelector('#search-box').value = '';
      } else {
        // console.log('Error.');
      }
    });
  }

  blurHandler = () => {
    setTimeout(() => { this.setState({ autoSuggest: [] }); }, 100);
  }

  render() {
    const searchTerm = document.getElementById('search-box');
    let searchResult;
    if (this.state.autoSuggest.length && searchTerm.value !== '' && !searchTerm.value.startsWith('tar') && !searchTerm.value.startsWith('rec')) {
      searchResult = this.state.autoSuggest.map((res, i) => {
        const index = i;
        return (<SearchResults key={index} data={res} listSelected={this.handleSubmit} />);
      });
    } else searchResult = [];

    return (
      <form onSubmit={this.handleSubmit} className="search--box">
        <label>
          <input
            id="search-box"
            type="text"
            placeholder="Buscar"
            value={this.internalData.search}
            onChange={(e) => { this.handleChange(e, 'internalData.search'); }}
            onBlur={this.blurHandler}
            autoComplete="off"
          />
        </label>
        <a className="search--box-reset" />
        <button type="submit">
          <span className="fa fa-search" />
        </button>
        <div id="x-search-list">
          <ul id="search-list" className="search--box-results">
            {searchResult}
          </ul>
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  catalogStore: PropTypes.shape({
    search: PropTypes.func,
    autoSuggest: PropTypes.func,
    autoSuggestResult: PropTypes.shape({}),
  }).isRequired,
};

SearchResults.propTypes = {
  data: PropTypes.shape({}).isRequired,
  listSelected: PropTypes.func.isRequired,
};

export default inject('catalogStore')(observer(SearchBox));
