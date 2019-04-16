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
      <div className='container'>
        <div className='customizationCardPie center'>
          <h4 className='customizationHeader'>Log in</h4>
          <Link className='customizationHeader' to='/signup'>or sign up</Link>
          <form onSubmit={this.handleSubmit}>
            <label className='smallHead' htmlFor='username'>Username</label>
            <input
              className='customizationInput'
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label className='smallHead' htmlFor='password'>Password</label>
            <input
              className='customizationInput'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps)(Login);
