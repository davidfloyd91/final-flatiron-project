import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Signup extends Component {
  componentDidMount(){
    this.props.dispatch({ type: 'SET_LONG', payload: false });
  };

  state = {
    username: '',
    email: '',
    password: '',
    confirmation: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.password === this.state.confirmation) {
      fetch('http://localhost:3000/users', {
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
          this.props.dispatch({ type: 'SET_USER_ID', payload: r.user.id });
          this.props.history.push('/charts');
        };
      });
    } else {
      alert('Sorry, those passwords don\'t match');
    };
  };

  render() {
    return (
      <div className='container'>
        <div className='customizationCardPie center'>
          <h4 className='customizationHeader'>Sign up
          </h4>
          <Link className='customizationHeader' to='/login'>or log in</Link>
          <form onSubmit={this.handleSubmit}>
            <label className='smallHead' htmlFor='username'>Username</label>
            <input
              className='customizationInput'
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label className='smallHead' htmlFor='email'>Email (optional)</label>
            <input
              className='customizationInput'
              name='email'
              type='text'
              value={this.state.email}
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
            <label className='smallHead' htmlFor='password'>Confirm password</label>
            <input
              className='customizationInput'
              name='confirmation'
              type='password'
              value={this.state.confirmation}
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

export default connect(mapStateToProps)(Signup);
