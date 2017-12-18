import React from 'react';
import CookieForm from '../components/CookieForm';
import CookieList from '../components/CookieList';

class CookieContainer extends React.Component {

  render() {
    return (
      <div>
        <CookieForm createCookie={this.props.createCookie} />
      <CookieList cookies={this.props.cookies} deleteCookie={this.props.deleteCookie} />
      </div>
    )
  }
}

export default CookieContainer;
