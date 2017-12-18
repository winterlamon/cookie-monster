import React from 'react';
import CookieCard from '../components/CookieCard';

class CookieList extends React.Component {


  render() {

    const printedCookieList = this.props.cookies.map(cookie => <CookieCard key={cookie.id} cookie={cookie} deleteCookie={this.props.deleteCookie} />)

    return (
      <div className="ui grid container">
        <div className="ui link cards">
          {printedCookieList}
        </div>
      </div>
    )
  }
}

export default CookieList;
