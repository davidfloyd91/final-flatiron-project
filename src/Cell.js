import React, { Component, Fragment } from 'react';

export default class Cell extends Component {
  handleChange = e => {
    this.props.newValue(e.target.value, this.props.x, this.props.y);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        {
          this.props.y === 1
            ?
          <form onSubmit={this.handleSubmit} className='cell'>
            <input
              type='text'
              value={this.props.value}
              onChange={this.handleChange}
            />
          </form>
            :
          this.props.y === 2
            ?
          <form onSubmit={this.handleSubmit} className='cell'>
            <input
              type='number'
              value={this.props.value}
              onChange={this.handleChange}
            />
          </form>
            :
          null
        }
      </Fragment>
    );
  };
};
