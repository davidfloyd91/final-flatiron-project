import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  componentDidMount(){
    this.props.dispatch({ type: 'SET_LONG', payload: false });
  };

  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(r => {
      if (r.errors) {
        alert(r.errors);
      } else {
        localStorage.setItem('jwt', r.jwt);
        this.props.history.push('/charts');
        this.props.dispatch({ type: 'SET_USER_ID', payload: r.user.id });
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Link to='/signup'>Sign up</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            name='username'
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps)(Login);
