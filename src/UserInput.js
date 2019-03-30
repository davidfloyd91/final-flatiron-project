import React, { Component, Fragment } from 'react';
import Table from './Table';

export default class UserInput extends Component {
  state = {
    grid: [
      [{value:  1}, {value:  3}],
      [{value:  2}, {value:  4}]
    ],
    newInput: '',
  }

  handleBlur = (newCell) => {
    console.log(newCell.id)
  };

  handleChange = e => {
    this.setState({
      newInput: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Table x={4} y={4} />
      </Fragment>
    );
  };
};
