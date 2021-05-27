import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// Mobx
import { Provider } from 'mobx-react';
import 'babel-polyfill';

// import
import './../public/sass/style.scss';

// Components
import Layout from './containers/Layout/DefaultLayout';
import LayoutBlank from './containers/Layout/BlankLayout';
import Catalog from './containers/Catalog/Catalog';
import Page from './containers/Page/Page';
import Blog from './containers/Blog/Blog';
import BlogCategory from './containers/BlogCategory/BlogCategory';
import Post from './containers/Post/Post';
import Category from './containers/Category/Category';
import SubCategory from './containers/SubCategory/SubCategory';
import Industry from './containers/Industry/Industry';
import Service from './containers/Service/Service';
import Product from './containers/Product/Product';

import Terms from './containers/Views/Common/Terms';
import Support from './containers/Views/Common/Support';
import Error404 from './containers/Views/Error404';
import Maintenance from './containers/Views/Maintenance';

// Stores
import orderStore from './store/Orders/Cart';
import catalogStore from './store/Catalog/Catalog';
import modals from './store/Modals/Modals';
import navigationStore from './store/Navigation/Navigation';

const DefaultLayout = ({ component: Component }) => (
  <Route render={matchProps => (
    <Layout>
      <Component {...matchProps} />
    </Layout>
    )}
  />
);

const BlankLayout = ({ component: Component }) => (
  <Route render={matchProps => (
    <LayoutBlank>
      <Component {...matchProps} />
    </LayoutBlank>
  )}
  />
);


const stores = {
  orderStore,
  catalogStore,
  modals,
  navigationStore,
};

// For easier debugging
window.z = stores;

// log environment
console.log(`.env is ${process.env.ENV_NAME}`);
const history = createBrowserHistory();


const Root = () => (
  <CookiesProvider>
    <Provider {...stores}>
      <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={Catalog} />
          <DefaultLayout exact path="/paginas/*" component={Page} />
          <DefaultLayout exact path="/blog" component={Blog} />
          <DefaultLayout exact path="/blog/articulos/*" component={Post} />
          <DefaultLayout exact path="/blog/*" component={BlogCategory} />
          <DefaultLayout exact path="/soluciones" component={Category} />
          <DefaultLayout exact path="/industria" component={Category} />
          <DefaultLayout exact path="/tecnologia/*" component={Category} />
          <DefaultLayout exact path="/soluciones/*" component={SubCategory} />
          <DefaultLayout exact path="/industria/*" component={Industry} />
          <DefaultLayout exact path="/servicios/*" component={Service} />
          <DefaultLayout exact path="/producto/*" component={Product} />
          <DefaultLayout path="/politicas-de-privacidad" component={Terms} />
          <DefaultLayout path="/soporte" component={Support} />
          <BlankLayout path="/maintenance" component={Maintenance} />
          <BlankLayout path="*" component={Error404} />
        </Switch>
      </Router>
    </Provider>
  </CookiesProvider>
);

// Enter MaintenanceMode if there is no response from catalog
const MaintenanceMode = () => <Router history={history}><BlankLayout path="/maintenance" component={Maintenance} /></Router>;
const App = stores.catalogStore ? <Root /> : <MaintenanceMode />;

DefaultLayout.propTypes = {
  component: PropTypes.func,
};

DefaultLayout.defaultProps = {
  component: () => {},
};

const tagManagerArgs = {
  gtmId: process.env.TAG,
};

ReactGA.initialize(process.env.GA);

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});


TagManager.initialize(tagManagerArgs);

render(App, document.getElementById('app'));

