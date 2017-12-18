import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CookieContainer from './containers/CookieContainer';

class App extends Component {
  state = {
      cookies: []
    }

    componentDidMount = () => (
      fetch('http://localhost:3000/cookies')
        .then(res => res.json())
        .then(cookies => this.setState({cookies}))
    )

    getCookies = () => (
      fetch('http://localhost:3000/cookies')
        .then(res => res.json())
        .then(cookies => this.setState({cookies}))
    )

    createCookie = (cookieInfo) => {
      console.log(cookieInfo);
      fetch('http://localhost:3000/cookies/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cookieInfo)
      })
        .then(res => res.json())
        .then(cookies => this.setState({cookies}), this.getCookies)
  }

  deleteCookie = (cookie) => (
    fetch(`http://localhost:3000/cookies/${cookie.id}`, {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cookie)
    })
      .then(res => res.json())
      .then(cookies => this.setState({cookies}))
)

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.otisspunkmeyer.com/sites/default/files/styles/large/public/products/OS-Fundraising-ChocolateChipTop_2017-20725-015.png?itok=jCxB1otI" className="App-logo" alt={logo} />
        <h1 className="App-title"><strong>Welcome to Cookie Monster</strong></h1>
        </header>
        <div>
          <CookieContainer cookies={this.state.cookies} createCookie={this.createCookie} deleteCookie={this.deleteCookie}/>
        </div>
      </div>
    );
  }
}

export default App;
