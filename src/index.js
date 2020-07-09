import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import TagManager from 'react-gtm-module';
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
import Category from './containers/Category/Category';
import Search from './containers/Catalog/Search';
import Product from './containers/Product/Product';
import MiniCart from './containers/Cart/MiniCart/MiniCart';
import Cart from './containers/Cart/Cart';
import CheckoutAddress from './containers/Checkout/Address/Address';
import CheckoutPayment from './containers/Checkout/Payments/MPCard';
import CheckoutConfirm from './containers/Checkout/Confirm/Confirm';

import DashboardAccount from './containers/Account/DashboardAccount/DashboardAccount';
import Orders from './containers/Account/Orders/Orders';
import OrdersDetails from './containers/Account/Orders/OrdersDetails';
import Profile from './containers/Account/Profile/Profile';

import Addresses from './containers/Account/Addresses/Addresses';
import AddressEdit from './containers/Account/Addresses/AddressEdit';


import Terms from './containers/Views/Common/Terms';
import Activation from './containers/Views/Common/Activation';
import PurchaseLimit from './containers/Views/Notification/PurchaseLimit';
import Error404 from './containers/Views/Error404';
import Maintenance from './containers/Views/Maintenance';

// Stores
import orderStore from './store/Orders/Cart';
import paymentsStore from './store/Payments/MpCard';
import accountStore from './store/Account/Account';
import catalogStore from './store/Catalog/Catalog';
import facets from './store/Facets/Facets';
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
  paymentsStore,
  accountStore,
  catalogStore,
  facets,
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
          <DefaultLayout exact path="/soluciones" component={Category} />
          {/* <DefaultLayout exact path="/industria" component={Category} /> */}
          {/* <DefaultLayout exact path="/tecnologia" component={Category} /> */}
          <DefaultLayout exact path="/search/*" component={Search} />
          <DefaultLayout exact path="/product/*" component={Product} />
          <DefaultLayout path="/cart/more/" component={MiniCart} />
          <DefaultLayout path="/cart" component={Cart} />
          <DefaultLayout path="/checkout/address" component={CheckoutAddress} />
          <DefaultLayout path="/checkout/payment" component={CheckoutPayment} />
          <DefaultLayout path="/checkout/confirm" component={CheckoutConfirm} />
          <DefaultLayout path="/checkout/purchase-limit" component={PurchaseLimit} />
          <DefaultLayout exact path="/account" component={DashboardAccount} />
          <DefaultLayout exact path="/account/orders" component={Orders} />
          <DefaultLayout exact path="/account/orders/details/:id" component={OrdersDetails} />
          <DefaultLayout exact path="/account/profile" component={Profile} />
          <DefaultLayout exact path="/account/addresses" component={Addresses} />
          <DefaultLayout exact path="/account/addresses-edit" component={AddressEdit} />
          <DefaultLayout path="/terms" component={Terms} />
          <DefaultLayout path="/activar" component={Activation} />
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


TagManager.initialize(tagManagerArgs);

render(App, document.getElementById('app'));

