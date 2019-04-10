import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Row from './Row';
import './App.css';
let grid;

class Table extends Component {
  componentDidMount() {
    grid = this.props.grid;
    let row = [];

    for (let y = 0; y < this.props.y; y++) {
      row = [...row, null];
    };

    for (let x = 0; x < this.props.x; x++) {
      grid = [...grid, row];
    };

    this.props.setGrid(grid);
  };

  renderRows = () => {
    if (grid && grid[0]) {
      return grid.map((row, x) => {
        return (
          <div className='row' key={x}>
            <Row
              key={x}
              id={x}
              x={x}
              y={this.props.y}
              values={row}
              newValue={this.newValue}
              removeRow={this.removeRow}
            />
          </div>
        );
      });
    };
  };

  newValue = (value, x, y) => {
    grid = [
      ...grid.slice(0, x - 1),
      [
        ...grid[x - 1].slice(0, y - 1),
        value,
        ...grid[x - 1].slice(y)
      ],
      ...grid.slice(x)
    ];

    this.props.dispatch({ type: 'SET_GRID', payload: grid });
  };

  addRow = () => {
    grid = [...grid, [null, null]];

    this.props.dispatch({ type: 'SET_GRID', payload: grid });

    // not sure if this is necesary
    this.props.dispatch({ type: 'SET_ROWS', payload: grid.length });
  };

  removeRow = x => {
    grid = [...grid.slice(0, x), ...grid.slice(x + 1)];

    this.props.dispatch({ type: 'SET_GRID', payload: grid })

    // not sure if this is necesary
    this.props.dispatch({ type: 'SET_ROWS', payload: grid.length });
  };

  render() {
    return (
      <div className='center'>
        <div className='table'>
          <h5 className='tableHead'>Labels</h5><h5 className='tableHead'>Values</h5>
          {this.renderRows()}
        </div>
        <button onClick={this.addRow}>Add a row</button>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    grid: state.grid,
    x: state.rows,
    y: state.columns
  };
};

export default connect(mapStateToProps)(Table);
