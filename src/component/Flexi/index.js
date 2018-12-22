import React, { Component } from "react";
import DropDown from "../CommonComponent/DropDown";
import TextField from "../CommonComponent/TextField";

class Flexi extends Component {
  onChange = e => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState({
      ...newState
    });
  };

  renderHtml = config => {
    let html = [];
    config.map((v, i) => {
      switch (v.type) {
        case "TextField":
          html.push(
            <TextField
              label={v.label}
              name={v.name}
              key={`${v.name}-${i}`}
              onChange={this.onChange}
            />
          );
          break;
        case "DropDown":
          html.push(
            <DropDown
              label={v.label}
              name={v.name}
              values={v.values}
              key={`${v.name}-${i}`}
              onChange={this.onChange}
            />
          );
          break;
      }
      if (v.items) {
        html = html.concat(this.renderHtml(v.items));
      }
    });
    return html;
  };

  render() {
    const { config, onSubmit } = this.props;
    return (
      <div className="col-md-12">
        <form>
          {this.renderHtml(config.items)}
          <button
            type="button"
            onClick={() => onSubmit({ ...this.state })}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Flexi;
