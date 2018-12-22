import React from "react";

const TextField = ({ label, onChange, placeholder, name, ...props }) => (
  <div className="form-group row">
    <label className="col-md-3 label-control">{label}</label>
    <div className="col-md-6">
      <input
        type="text"
        className="form-control"
        placeholder={`${placeholder ? placeholder : label}`}
        onChange={onChange}
        name={name}
        {...props}
      />
    </div>
  </div>
);

export default TextField;
