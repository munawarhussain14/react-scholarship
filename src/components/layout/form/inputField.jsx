import React, { Fragment } from "react";
import { Field } from "formik";
import Label from "./label";

const InputField = ({ name, required = false, placeholder = "" }) => {
  return (
    <Fragment>
      <div className="form-group">
        <Label name={name} required={required} />
        <Field
          id={name}
          required={required}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    </Fragment>
  );
};

export default InputField;
