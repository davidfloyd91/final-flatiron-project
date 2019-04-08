import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

class Row extends Component {
  state = {
    cellsListening: true,
  };

  newValue = (value, x, y) => {
    this.props.newValue(value, x, y);
  };

  setCellsListening = bool => {
    this.setState({ cellsListening: bool });
  };

  removeRow = () => {
    const x = this.props.x;
    let grid = [...this.props.grid.slice(0, x), ...this.props.grid.slice(x + 1)];

    this.setCellsListening(false);
    this.props.dispatch({ type: 'SET_LAST_REMOVED', payload: x });
    this.props.dispatch({ type: 'SET_GRID', payload: grid });
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
          cellsListening={this.props.x > this.props.lastRemoved ? false : this.state.cellsListening}
          setCellsListening={this.setCellsListening}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <Fragment>
          {this.renderCells()}
        </Fragment>
        <button onClick={this.removeRow}> x </button>
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    grid: state.grid,
    lastRemoved: state.lastRemoved
  };
};

export default connect(mapStateToProps)(Row);
