import React, { Component } from 'react';
import { connect } from 'react-redux';
let copyData;

class EmbedCode extends Component {
  embedRef = React.createRef();

  data = () => {
    if (this.props.chart) {
      let data = this.props.chart.data;
      return JSON.stringify(data).replace(/"/g, '\'').replace('_datasets', 'datasets');
    };
  };

  handleClick = () => {
    const embed = this.embedRef;
    embed.select();
    document.execCommand('copy');
  };

  render() {
    if (this.data()) {
      let showData = `&lt;iframe srcdoc="&lt;div id='embed_container'&gt;&lt;/div&gt;&lt;script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin&gt;&lt;/script&gt;&lt;script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin&gt;&lt;/script&gt;&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin&gt;&lt;/script&gt;&lt;canvas id='bar-chart' width='1000px' height='800px'&gt;&lt;/canvas&gt;&lt;script&gt;new Chart(document.getElementById('bar-chart'),${this.data()});&lt;/script&gt;" width="1000px" height="800px"&gt;&lt;/iframe&gt;`

      copyData = showData.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

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
