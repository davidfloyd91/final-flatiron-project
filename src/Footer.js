import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    console.log(this.props.long)
    return (
      <div className={this.props.long ? 'footer' : 'footerShort'}>
        <div className='footerText'>
          Email: davidfloyd91@gmail.com | PGP: https://davidfloyd91.github.io/2019/01/22/public-key.html
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    long: state.long
  };
};

export default connect(mapStateToProps)(Footer);
