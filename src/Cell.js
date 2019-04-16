import React, { Fragment } from 'react';

const Cell = props => {
  const handleChange = e => {
    props.newValue(e.target.value, props.x, props.y);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      {
        props.y === 1
          ?
        <form onSubmit={handleSubmit} className='cell'>
          <input
            type='text'
            value={props.value}
            onChange={handleChange}
          />
        </form>
          :
        props.y === 2
          ?
        <form onSubmit={handleSubmit} className='cell'>
          <input
            type='number'
            value={props.value}
            onChange={handleChange}
          />
        </form>
          :
        null
      }
    </Fragment>
  );
};

export default Cell;
