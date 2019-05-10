import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

const Footer = props => {
  return (
    <div className={props.long ? 'footerBackground' : 'footerBackgroundShort'}>
      <div className={props.long ? 'footer' : 'footerShort'}>
        <div className='footerText'>
          <a className='white' href='https://davidfloyd91.github.io/about/' target='_blank' rel='noopener noreferrer'>© 2019 David Floyd</a> | MIT License | davidfloyd91 at gmail | <a className='white' href='https://davidfloyd91.github.io/pgp/' target='_blank' rel='noopener noreferrer'>PGP key</a>
        </div>
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
