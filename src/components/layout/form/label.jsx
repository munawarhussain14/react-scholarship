import React from "react";
import labels from "../../../data/labels.json";

const Label = ({ label, name, required, urduLabel }) => {
  return (
    <div className="row">
      <div className="col-sm-6 col-6">
        <label htmlFor={name} className="english">
          {labels[name]["eng"]}
          {required ? <span className="required">*</span> : ""}
        </label>
      </div>
      <div className="col-sm-6 col-6 text-right">
        <label htmlFor={name} className="urdu">
          {required ? <span className="required">*</span> : ""}{" "}
          {labels[name]["urdu"]}
        </label>
      </div>
    </div>
  );
};

export default Label;
