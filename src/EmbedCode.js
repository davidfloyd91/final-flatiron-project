import React, { Fragment } from 'react';
import { connect } from 'react-redux';
let embedCode;

const EmbedCode = props => {
  let embedRef = React.createRef();

  const data = () => {
    if (props.chart) {
      let data = {...props.chart.data};
      if (props.chart.data.data.datasets) {
        const datasets = [...props.chart.data.data.datasets];
        delete data.data.datasets;
        data.data._datasets = datasets;
      };

      embedCode = convertToEmbedCode(data);
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

  // you removed react and react-dom below: <script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin></script><script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin></script>

  if (data()) {
    const copyData = `<iframe srcdoc="<div id='embed_container'></div><script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin></script><canvas id='salp-chart' width='740px' height='540px'></canvas><script>new Chart(document.getElementById('salp-chart'),${embedCode});</script>" width="740px" height="545px"></iframe>`

    return (
      <Fragment>
        <h5>Click below to copy your chart's embed code:</h5>
        <textarea className='embedCode' value={copyData} onClick={handleClick} ref={code => {embedRef = code;}} />
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
