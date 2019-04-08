import React, { Component, Fragment } from 'react';
import Cell from './Cell';

export default class Row extends Component {
  newValue = (value, x, y) => {
    this.props.newValue(value, x, y);
  };

  renderCells = () => {
    let yArray = [];
    for (let y = 0; y < this.props.y; y++) {
      yArray.push(y);
    };

    return yArray.map(y => {
      let keyId = `${this.props.x + 1}-${y + 1}`;

      return (
        <Cell
          key={keyId}
          x={this.props.x + 1}
          y={y + 1}
          defaultValue={this.props.values[y]}
          newValue={this.newValue}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        {this.renderCells()}
      </Fragment>
    );
  };
};
