import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Cell extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.props.dispatch({ type: 'SET_CELL_LISTENING', payload: true });
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
              value={this.props.cellListening ? this.state.value : this.props.defaultValue}
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
              value={this.props.cellListening ? this.state.value : this.props.defaultValue}
            />
          </form>
            :
          null
        }
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    cellListening: state.cellListening
  };
};

export default connect(mapStateToProps)(Cell);
