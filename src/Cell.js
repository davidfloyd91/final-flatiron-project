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
        <form onSubmit={this.handleBlur} className='cell'>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
        </form>
      </Fragment>
    );
  };
};
