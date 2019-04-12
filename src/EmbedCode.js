import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmbedCode extends Component {
  embedRef = React.createRef();

  data = () => {
    if (this.props.chart) {
      let data = this.props.chart.data;
      return JSON.stringify(data).replace(/"/g, '\'').replace('_datasets', 'datasets');
    };
  };

  handleClick = () => {
    this.embedRef.select();
    document.execCommand('copy');
  };

  render() {
    if (this.data()) {
      const copyData = `<iframe srcdoc="<div id='embed_container'></div><script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin></script><script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin></script><script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin></script><canvas id='bar-chart' width='1000px' height='800px'></canvas><script>new Chart(document.getElementById('bar-chart'),${this.data()});</script>" width="1000px" height="800px"></iframe>`

      return (
        <textarea className='embedCode' value={copyData} onClick={this.handleClick} ref={code => {this.embedRef = code;}} />
      );
    } else {
      return null;
    };
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};

export default connect(mapStateToProps)(EmbedCode);
