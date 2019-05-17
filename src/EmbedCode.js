import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { _ } from './helpers';
let embedCode;

const EmbedCode = props => {
  let embedRef = React.createRef();

  const data = () => {
    if (props.chart) {
      let decircularizedData = _.cloneDeep({...props.chart.data});
      if (decircularizedData.data.datasets) {
        const datasets = decircularizedData.data.datasets;
        delete decircularizedData.data.datasets;
        decircularizedData.data._datasets = datasets;
      };
  //     if (props.chart.data.data.datasets) {
  //       const datasets = [...props.chart.data.data.datasets];
  //       delete data.data.datasets;
  //       data.data._datasets = datasets;
  //     };
  //
      embedCode = convertToEmbedCode(decircularizedData);
    };

    return embedCode;
  };

  const convertToEmbedCode = data => {
    return JSON.stringify(data)
    .replace(/'/g, '\\\'')
    .replace(/"/g, '\'')
    .replace('_datasets', 'datasets');
  };

  const handleClick = () => {
    embedRef.select();
    document.execCommand('copy');
  };

  if (data()) {
    const copyData = `<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin></script><canvas id='salp-chart'></canvas><script>new Chart(document.getElementById('salp-chart'),${embedCode});</script>`

    return (
      <Fragment>
        <h5>Click below to copy your chart's embed code:</h5>
        <textarea className='embedCode' value={copyData} onClick={handleClick} ref={code => {embedRef = code;}} readOnly />
      </Fragment>
    );
  } else {
    return null;
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};

export default connect(mapStateToProps)(EmbedCode);
