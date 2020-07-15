import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import $ from 'jquery';

// Helpers
import validate from '../../../helpers/validate_form';

// UI
import UI from './Profile.ui';

class Profile extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(...props) {
    super(...props);

    this.internalData = {
      date_of_birth: '',
      email_1: '',
      first_name: '',
      gender: '',
      last_name: '',
      mobile_country_code: '',
      mobile_phone_1: '',
      mobile_phone__country: '',
      phone_1: '',
      year: '',
      month: '',
      day: '',
    };

    // Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.getElementById('initial').scrollIntoView(true);
    validate();
    this.initUserInfo();
  }

  initUserInfo = async () => {
    const userInfo = await this.props.accountStore.dataPerson();

    if (userInfo && !userInfo.success) {
      this.context.router.history.push('/not-found');
    }

    if (userInfo.success && userInfo.data) {
      const info = userInfo.data.data.data;
      const dateOfBirth = info.date_of_birth !== '' ? info.date_of_birth.split('-') : '---';
      const internalData = {
        first_name: info.first_name,
        last_name: info.last_name,
        date_of_birth: info.date_of_birth,
        email_1: info.email_1,
        gender: info.gender,
        mobile_country_code: info.mobile_country_code,
        mobile_phone_1: info.mobile_phone_1,
        mobile_phone_country: info.mobile_phone__country,
        phone_1: info.phone_1,
        year: dateOfBirth[0],
        month: dateOfBirth[1],
        day: dateOfBirth[2],
      };
      this.internalData = internalData;
      this.setState({ internalData });
    }
  }

  handleChange(e, data) {
    const keys = data.split('.');
    const profileForm = this;
    profileForm[keys[0]][keys[1]] = e.target.value;

    const dateOfBirth = `${this.internalData.year}-${this.internalData.month}-${this.internalData.day}`;

    let logonId;
    if (this.props.accountStore.person && this.props.accountStore.person.success) {
      logonId = this.props.accountStore.person.data.data.logon_id;
    }

    const newDataProfile = {
      ...this.internalData,
      date_of_birth: dateOfBirth,
      email_1: logonId,
    };

    this.setState(newDataProfile);
  }

  handleData() {
    const query = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      date_of_birth: this.state.date_of_birth,
      email_1: this.state.email_1,
      gender: this.state.gender,
      mobile_country_code: this.state.mobile_country_code,
      mobile_phone_1: this.state.mobile_phone_1,
      mobile_phone_country: this.state.mobile_phone__country,
      phone_1: this.state.phone_1,
    };

    this.props.accountStore.profilePerson(query, this.context.router);
  }

  handleSubmit(e) {
    e.preventDefault();
    const isIE = (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1);
    if (isIE) this.handleData();
    else if (!isIE && $("form[name='profile']").valid()) this.handleData();
  }

  render() {
    let logonId;

    if (this.props.accountStore.person && this.props.accountStore.person.success) {
      logonId = this.props.accountStore.person.data.data.logon_id;
    }

    return (
      <UI
        internalData={this.internalData}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        logonId={logonId}
      />
    );
  }
}

Profile.propTypes = {
  accountStore: PropTypes.shape({
    profilePerson: PropTypes.func,
    person: PropTypes.shape({
      success: PropTypes.bool,
      data: PropTypes.shape({
        data: PropTypes.shape({
          logon_id: PropTypes.string,
        }),
      }),
    }),
    dataPerson: PropTypes.func,
  }).isRequired,
};

export default inject('accountStore')(observer(Profile));
