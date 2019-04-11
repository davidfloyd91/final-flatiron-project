import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class EmbedCode extends Component {
  render() {
    return (
      <div>
        <p>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en" dir="ltr"&gt;
          &lt;head&gt;
            &lt;meta charset="utf-8"&gt;
            &lt;title&gt;&lt;/title&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;div id="embed_container"&gt;&lt;/div&gt;

            &lt;script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin&gt;&lt;/script&gt;
            &lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin&gt;&lt;/script&gt;
            &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js" crossorigin&gt;&lt;/script&gt;

            &lt;script type="text/javascript" src="Embed.js"&gt;&lt;/script&gt;
          &lt;/body&gt;
        &lt;/html&gt;
        </p>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps)(EmbedCode);
