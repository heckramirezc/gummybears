import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { iconSad } from '../../../helpers/svg';

// helpers
import { dateFormat } from '../../../helpers/formatter';


class PurchaseLimit extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      lastEpoch: '',
    };
  }

  componentDidMount() {
    this.ordersPerson();
  }

  ordersPerson = async () => {
    let lastEpoch = '';
    const orderResponse = await this.props.accountStore.ordersPerson();
    if (orderResponse.success) {
      const orders = orderResponse.data.data;
      if (orders.length) {
        lastEpoch = orders.sort((epo1, epo2) => {
          const epoch1 = new Date(epo1.last_update.$date).getTime();
          const epoch2 = new Date(epo2.last_update.$date).getTime();
          return epoch1 - epoch2;
        })[0].last_update.$date;
      }
    }
    this.setState({ lastEpoch });
  };

  render() {
    return (
      <main>
        <div className="page--purchase_limit">
          <aside>
            <i>{iconSad}</i>
          </aside>
          <section>
            <h2>Has alcanzado el límite máximo de compras al mes.</h2>
            <p>Tu primera compra fue el día <b>{dateFormat(this.state.lastEpoch)}</b></p>
            <p>Tendrás que esperar 30 días a partir de esa fecha para volver a comprar.</p>
            <Link to="/"><span>Regresar a la tienda</span></Link>
          </section>
        </div>
      </main>
    );
  }
}

PurchaseLimit.propTypes = {
  accountStore: PropTypes.shape({
    ordersPerson: PropTypes.func,
    orders: PropTypes.shape({
      data: PropTypes.shape({}),
    }),
  }).isRequired,
};

export default inject('accountStore')(observer(PurchaseLimit));
