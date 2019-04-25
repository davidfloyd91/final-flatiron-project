import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// currently you can't set min, max or tick size on horizontal charts -- why/how to fix?

const CustomizationFields = props => {

  const handleChange = e => {
    props.customize(e);
  };

  const colorsArray = [
    {
      name: 'highlighterPink',
      hex: '#ef5777'
    }, {
      name: 'darkPeriwinkle',
      hex: '#575fcf'
    }, {
      name: 'megaman',
      hex: '#4bcffa'
    }, {
      name: 'freshTurquoise',
      hex: '#34e7e4'
    }, {
      name: 'mintGreen',
      hex: '#0be881'
    }, {
      name: 'sizzlingRed',
      hex: '#f53b57'
    }, {
      name: 'freeSpeechBlue',
      hex: '#3c40c6'
    }, {
      name: 'spiroDiscoBall',
      hex: '#0fbcf9'
    }, {
      name: 'jadeDust',
      hex: '#00d8d6'
    }, {
      name: 'greenTeal',
      hex: '#05c46b'
    }, {
      name: 'narenjiOrange',
      hex: '#ffc048'
    }, {
      name: 'yrielYellow',
      hex: '#ffdd59'
    }, {
      name: 'sunsetOrange',
      hex: '#ff5e57'
    }, {
      name: 'chromeYellow',
      hex: '#ffa801'
    }, {
      name: 'vibrantYellow',
      hex: '#ffd32a'
    }, {
      name: 'redOrange',
      hex: '#ff3f34'
    }, {
      name: 'londonSquare',
      hex: '#808e9b'
    }, {
      name: 'hintOfElusiveBlue',
      hex: '#d2dae2'
    }
  ];

  const renderRadios = () => {
    return colorsArray.map(color => {
      return (
          <Fragment>
            <input
              className={color.name + ' colorRadio'}
              onChange={handleChange}
              type='radio'
              name='color'
              value={color.hex}
            />
            <div className={color.name + ' colorBox'}>HOWDY!!!</div>
          </Fragment>
      );
    });
  };

  const renderCheckboxes = () => {
    return colorsArray.map(color => {
      return (
          <Fragment>
            <input
              onChange={handleChange}
              type='checkbox'
              name='colors'
              value={color.hex}
              checked={props.colors.includes(color.hex)}
            />
            <div className={color.name + ' colorBox'}>HOWDY!!!</div>
          </Fragment>
      );
    });
  };

  return (
    <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationPanePie' : 'customizationPane'}>
      <h4 className='customizationPaneHeader'>Customize your chart</h4>
      {
        props.chartType[0]
          ?
        <Fragment>
          <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationCardPie left' : 'customizationCard left'}>
            <h4 className='customizationHeader'>Labels</h4>
            <label htmlFor='title' className='smallHead'>Title </label>
            <input onChange={handleChange} name='title' value={props.title} className='customizationInput' />
            {
              props.chartType !== 'pie'
                ?
              <Fragment>
                <label htmlFor='label' className='smallHead'> Top label </label>
                <input onChange={handleChange} name='label' value={props.label} className='customizationInput' />
                <label htmlFor='displayLabel' className='smallHeadInline'> Display top label? </label>
                <input type='checkbox' onChange={handleChange} name='displayLabel' checked={props.labelDisplay} className='labelCheckBox' />
                <label htmlFor='xLabel' className='smallHead'> Horizontal axis label </label>
                <input onChange={handleChange} name='xLabel' value={props.xLabel} className='customizationInput' />
                <label htmlFor='yLabel' className='smallHead'> Vertical axis label </label>
                <input onChange={handleChange} name='yLabel' value={props.yLabel} className='customizationInput' />
                {
                  props.chartType === 'bar'
                    ?
                  <Fragment>
                    {
                      props.horizontal
                        ?
                      <button className='customizationButton' onClick={handleChange} name='horizontal'>Switch to vertical bars</button>
                        :
                      <button className='customizationButton' onClick={handleChange} name='horizontal'>Switch to horizontal bars</button>
                    }
                  </Fragment>
                    :
                  null
                }
              </Fragment>
                :
              null
            }
          </div>
          <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationCardPie right' : 'customizationCard right'}>
            <h4 className='customizationHeader'>Display</h4>
            {
              props.chartType === 'line'
                ?
              <Fragment>
                <label htmlFor='tension' className='smallHead'> Line tension </label>
                <input onChange={handleChange} name='tension' placeholder={props.tension} className='customizationInput' />
                <label htmlFor='radius' className='smallHead'> Point radius </label>
                <input onChange={handleChange} name='radius' placeholder={props.radius} className='customizationInput' />
                <label htmlFor='color' className='smallHead'> Color </label>
                <div className='colorsContainer'>
                {renderRadios()}
                </div>
              </Fragment>
                :
              <Fragment>
                <label className='smallHead'> Colors </label>
                <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'colorsContainerPie' : 'colorsContainer'}>
                {renderCheckboxes()}
                </div>
              </Fragment>
            }
          </div>
          <Fragment>
            {
              (props.chartType !== 'pie' && !props.horizontal)
                ?
              <div className='customizationCard center'>
                <h4 className='customizationHeader'>Scales</h4>
                <label htmlFor='min' className='smallHead'> Vertical minimum </label>
                <input onChange={handleChange} name='min' placeholder={props.min} className='customizationInput' />
                <label htmlFor='max' className='smallHead'> Vertical maximum </label>
                <input onChange={handleChange} name='max' placeholder={props.max} className='customizationInput' />
                <label htmlFor='ticks' className='smallHead'> Tick value </label>
                <input onChange={handleChange} name='ticks' placeholder={props.ticks} className='customizationInput' />
              </div>
                :
              null
            }
          </Fragment>
        </Fragment>
          :
        null
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    color: state.color,
    colors: state.colors,
    chartType: state.chartType,
    labelDisplay: state.labelDisplay,
    horizontal: state.horizontal,
    label: state.label,
    max: state.max,
    min: state.min,
    radius: state.radius,
    tension: state.tension,
    ticks: state.ticks,
    title: state.title,
    xLabel: state.xLabel,
    yLabel: state.yLabel
  };
};

export default connect(mapStateToProps)(CustomizationFields);
