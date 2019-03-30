import React, { Component, Fragment } from 'react';
import Row from './Row';
import './App.css';

export default class Table extends Component {
  state = {
    grid: {},
  };

  componentDidMount() {
    let row = [];
    let grid = {};

    for (let y = 0; y < this.props.y; y++) {
      row = [...row, {value: ''}];
    };

    for (let x = 0; x < this.props.x; x++) {
      grid = {...grid, [x + 1]: row};
    };

    this.setState({ grid });
  };

  renderRows = () => {
    let xArray = [];

    for (let x = 0; x < this.props.x; x++) {
      xArray.push(x);
    };

    return xArray.map(x => {
      return (
        <div className='row' key={x}>
          <Row
            key={x}
            id={x}
            x={x}
            y={this.props.y}
            newValue={this.newValue}
          />
        </div>
      );
    });
  };

  newValue = (value, x, y) => {
    this.setState({
      grid: {
        ...this.state.grid,
        [x]: [
          ...this.state.grid[x].slice(0, y - 1),
          {value},
          ...this.state.grid[x].slice(y)
        ]
      },
    });
  };

  render() {
    return (
      <Fragment>
        {this.renderRows()}
      </Fragment>
    );
  };
};
