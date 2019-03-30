import React, { Component, Fragment } from 'react';
import Table from './Table';

export default class UserInput extends Component {
  // todo: currently, if user changes rows or column input table is wiped
  state = {
    rows: 0,
    columns: 0,
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    if (e.target.name === 'rows') {
      this.setState({
        rows: e.target.value,
      });
    } else if (e.target.name === 'columns') {
      this.setState({
        columns: e.target.value,
      });
    };
  };

  render() {
    return (
      <Fragment>
        <h5>Specify the number of rows and columns</h5>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='number' min='0' name='rows' placeholder='Number of rows' />
          <input onChange={this.handleChange} type='number' min='0' name='columns' placeholder='Number of columns' />
        </form>
        <h5>Input your data</h5>
        { (this.state.rows > 0 && this.state.columns > 0)
          ? <Table x={this.state.rows} y={this.state.columns} />
          : null
        }
      </Fragment>
    );
  };
};
