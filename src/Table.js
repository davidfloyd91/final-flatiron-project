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
    if (this.props.grid.length > 0) {
      grid = this.props.grid;
    };

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
  };

  render() {
    return (
      <Fragment>
        <h5 className='table-head'>Labels</h5><h5 className='table-head'>Values</h5>
        {this.renderRows()}
        <button onClick={this.addRow}>Add a row</button>
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    cellListening: state.cellListening,
    grid: state.grid,
    x: state.rows,
    y: state.columns
  };
};

export default connect(mapStateToProps)(Table);
