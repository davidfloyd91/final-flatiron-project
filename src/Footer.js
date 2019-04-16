import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

const Footer = props => {
  return (
    <div className={props.long ? 'footer' : 'footerShort'}>
      <div className='footerText'>
        © 2019 David Floyd | MIT License | davidfloyd91 at gmail | <a className='white' href='https://davidfloyd91.github.io/2019/01/22/public-key.html' target='_blank' rel='noopener noreferrer'>PGP key</a>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    long: state.long
  };
};

export default connect(mapStateToProps)(Footer);
