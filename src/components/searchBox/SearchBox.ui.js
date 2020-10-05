import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import listSelector from '../../helpers/liselector';

// const hide = {
//   display: 'none',
// };

const SearchResults = ({ data }) => {
  let slug = '/';
  if (data.url.includes('servicios')) {
    slug = data.url.slice(0, -1).replace('https://www.gyssa.com/wp', '');
  } else if (data.url.includes('products')) {
    slug = data.url.slice(0, -1).replace('https://www.gyssa.com/wp/products/', '/producto/');
  } else {
    slug = data.url.slice(0, -1).replace('https://www.gyssa.com/wp/', '/blog/articulos/');
  }
  return (
    <li className="autosuggest" role="presentation" tabIndex="-1" >
      <Link to={slug}>
        {data.title}
      </Link>
    </li>
  );
};

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
  completeSentence = (data) => {
    const loginForm = this;
    loginForm.internalData.search = data;
  }

  handleChange = (e, data) => {
    const keys = data.split('.');
    const loginForm = this;

    if (e.target.value && e.target.value.length && e.target.value.length >= 3) {
      this.props.catalogStore.autoSuggest({ keyword: e.target.value }).then((res) => {
        if (res.data && res.success) {
          this.setState({ autoSuggest: res.data.data });
        }
      });
    }

    loginForm[keys[0]][keys[1]] = e.target.value;
    this.setState(loginForm);
  }

  handleSubmit = (e, data) => {
    e.preventDefault();
    let searchData = data;
    if (searchData === undefined) searchData = this.state.internalData.search;
  }

  blurHandler = () => {
    setTimeout(() => { this.setState({ autoSuggest: [] }); }, 100);
  }

  render() {
    const searchTerm = this.internalData.search;
    let searchResult;
    if (this.state.autoSuggest.length && searchTerm !== '' && !searchTerm.startsWith('tar') && !searchTerm.startsWith('rec')) {
      searchResult = this.state.autoSuggest.map((res, i) => {
        const index = i;
        return (<SearchResults key={index} data={res} />);
      });
    } else {
      searchResult = [];
    }

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
};

export default inject('catalogStore')(observer(SearchBox));
