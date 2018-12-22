import React from "react";

const DropDown = ({ label, onChange, name, values, ...props }) => (
  <div className="form-group row">
    <label className="col-md-3 label-control">{label}</label>
    <div className="col-md-6">
      <select
        type="text"
        className="form-control"
        onChange={onChange}
        name={name}
        {...props}
      >
        {values.map((v, index) => (
          <option value={v} key={index}>
            {v}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default DropDown;
