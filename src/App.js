import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Sandbox from './Sandbox';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

class App extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      fetch('http://localhost:3000/auto_login', {
        headers: {
          'Authorization': jwt
        }
      })
      .then(r => r.json())
      .then(res => {
        if (res.errors) {
          alert(res.errors);
        } else {
          this.props.dispatch({ type: 'SET_USER_ID', payload: res.id })
        };
      });
    } else {
      this.props.history.push('/login');
    };
  };

  render() {
    return (
      <div className='container'>
        <Nav history={this.props.history} />
        <Switch>
          <Route
            path='/charts/:id'
            render={routerProps => {
              return <Dashboard {...routerProps} />
            }}
          />
          <Route
            path='/charts'
            render={routerProps => {
              return <Dashboard {...routerProps} />
            }}
          />
          <Route
            path='/sandbox'
            render={routerProps => {
              return <Sandbox {...routerProps} />
            }}
          />
          <Route
            path='/login'
            render={routerProps => {
              return <Login {...routerProps} />
            }}
          />
          <Route
            path='/signup'
            render={routerProps => {
              return <Signup {...routerProps} />
            }}
          />
        </Switch>
        <Footer />
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps)(App);
