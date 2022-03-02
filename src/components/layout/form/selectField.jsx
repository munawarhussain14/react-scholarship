import React, { Fragment } from "react";
import { Field } from "formik";
import Label from "./label";
import _labels from "../../../data/labels.json";

const SelectField = ({ name, options = [], ...props }) => {
  options = [
    {
      value: "",
      text: "Select " + _labels[name]["eng"],
      attr: {},
    },
    ...options,
  ];
  const selectValue = "";
  return (
    <Fragment>
      <div className="form-group">
        <Label name={name} required={props.required ? true : false} />
        <Field
          as="select"
          id={name}
          name={name}
          className="form-control"
          {...props}
        >
          {options.map((option) => (
            <option
              key={option["value"]}
              value={option["value"]}
              {...option.attr}
            >
              {option["text"]}
            </option>
          ))}
        </Field>
      </div>
    </Fragment>
  );
};

export default SelectField;
