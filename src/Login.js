import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

class Login extends Component {
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
    .then(console.log)
    // {errors: "Sorry, we didn't recognize that username and password"}
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='username'>Username</label>
        <input
          name='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label for='password'>Password</label>
        <input
          name='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  };
};

function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps)(Login);
