import React, { Fragment, useState } from "react";
import { Field } from "formik";
import Label from "./label";

const InputField = ({
  name,
  required = false,
  placeholder = "",
  type = "text",
  errors,
  touched,
}) => {
  return (
    <Fragment>
      <div className="form-group">
        <Label name={name} required={required} />
        <Field
          id={name}
          required={required}
          name={name}
          type={type}
          placeholder={placeholder}
          className="form-control"
        />
        {errors[name] && touched[name] ? (
          <div className="error-message">{errors[name]}</div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default InputField;
