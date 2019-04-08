import React, { Component, Fragment } from 'react';

export default class Cell extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.props.setCellsListening(true);
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
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.props.cellsListening ? this.state.value : this.props.defaultValue}
              placeholder={this.props.defaultValue}
            />
          </form>
            :
          this.props.y === 2
            ?
          <form onSubmit={this.handleBlur} className='cell'>
            <input
              type='number'
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.props.cellsListening ? this.state.value : this.props.defaultValue}
              placeholder={this.props.defaultValue}
            />
          </form>
            :
          null
        }
      </Fragment>
    );
  };
};
