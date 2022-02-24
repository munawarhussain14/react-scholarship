import React, { useState, useEffect } from "react";
import InputField from "../layout/form/inputField";
import SelectField from "../layout/form/selectField";

const Subjects = ({ grade, options }) => {
  const [selectedGrade, setGrade] = useState("");

  useEffect(() => {
    if (grade == 9 || grade == 10) {
      setGrade("matric");
    } else if (grade == 11 || grade == 12) {
      setGrade("fsc");
    } else if (grade == 13) {
      setGrade("dae");
    } else if (grade == 16) {
      setGrade("bacholer");
    } else if (grade == 18) {
      setGrade("master");
    }
  }, [grade]);

  return (
    <div className="row">
      <div className="col-6">
        {selectedGrade == "matric" || selectedGrade == "fsc" ? (
          <SelectField required={true} name="subject" options={options} />
        ) : selectedGrade == "dae" ||
          selectedGrade == "bacholer" ||
          selectedGrade == "master" ? (
          <InputField name="subject" required={true} />
        ) : (
          ""
        )}
      </div>
      <div className="col-6">
        {selectedGrade == "dae" ||
        selectedGrade == "bacholer" ||
        selectedGrade == "master" ? (
          <SelectField required={true} name="semester" options={options} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Subjects;
