import React, { Component, Fragment } from 'react';

export default class Cell extends Component {
  // what's happening here is probably illegal
  // at a minimum you should rename things better you psycho
  state = {
    newValue: '',
  };

  handleChange = e => {
    this.setState({
      newValue: e.target.value,
    });
  };

  handleBlur = e => {
    e.preventDefault();
    this.props.newValue(this.state.newValue, this.props.x, this.props.y);
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
              value={this.props.value}
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
              value={this.props.value}
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
