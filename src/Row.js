import React, { Fragment } from 'react';
import Cell from './Cell';

const Row = props => {
  const renderCells = () => {
    let yArray = [];
    for (let y = 0; y < props.y; y++) {
      yArray.push(y);
    };

    return yArray.map(y => {
      let keyId = `${props.x + 1}-${y + 1}`;

      return (
        <Cell
          key={keyId}
          x={props.x + 1}
          y={y + 1}
          value={props.values[y]}
          newValue={props.newValue}
        />
      );
    });
  };

  return (
    <Fragment>
      {renderCells()}
      <button className='danger' onClick={() => props.removeRow(props.x)}> × </button>
    </Fragment>
  );
};

export default Row;
