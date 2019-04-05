import React, { Component, Fragment } from 'react';

export default class Cell extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleBlur = e => {
    e.preventDefault();
    this.props.newValue(this.state.value, this.props.x, this.props.y);
  };

  render() {
    return (
      <Fragment>
        {
          this.props.y === 1
            ?
          <form onSubmit={this.handleBlur} className='cell'>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </form>
            :
          this.props.y === 2
            ?
          <form onSubmit={this.handleBlur} className='cell'>
            <input
              type='number'
              value={this.state.value}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
            />
          </form>
            :
          null
        }
      </Fragment>
    );
  };
};
