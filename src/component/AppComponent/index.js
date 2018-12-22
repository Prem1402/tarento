import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Flexi from "../Flexi";
import "./index.css";

class App extends Component {
  state = {
    submitValue: {}
  };

  onFlexiSubmit = value => {
    console.log(value);
    this.setState({
      submitValue: value
    });
  };

  render() {
    const { felxiConfig } = this.props;
    const { submitValue } = this.state;
    return (
      <div className="container mt-20">
        <div className="row">
          <Flexi onSubmit={this.onFlexiSubmit} config={felxiConfig} />
        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          <h3 className="col-md-12">Submited Value</h3>
          <br />
          <br />
          <br />
          <p className="col-md-12 p-20 bg-black">
            <pre className="c-w">
              {JSON.stringify(submitValue, undefined, 2)}
            </pre>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
