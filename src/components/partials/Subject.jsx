import React, { useState, useEffect } from "react";
import InputField from "../layout/form/inputField";
import SelectField from "../layout/form/selectField";
import _subjects from "../../data/subjects.json";
import _semesters from "../../data/semester.json";

const Subjects = ({ onSetField, grade, errors, touched }) => {
  const [selectedGrade, setGrade] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    onSetField("subject", "");
    onSetField("semester", "");
    if (grade == 9 || grade == 10) {
      setSubjects(_subjects.matric);
    } else if (grade == 11 || grade == 12) {
      setSubjects(_subjects.fsc);
    } else {
      setSubjects([]);
    }
    if (grade == 9 || grade == 10) {
      setGrade("matric");
    } else if (grade == 11 || grade == 12) {
      setGrade("fsc");
    } else if (grade == 13) {
      setGrade("dae");
      setSemesters(_semesters.dae);
    } else if (grade == 16) {
      setGrade("bacholer");
      console.log(_semesters.bachelor);
      setSemesters(_semesters.bachelor);
    } else if (grade == 18) {
      setGrade("master");
      setSemesters(_semesters.master);
    } else {
      setGrade(null);
      setSemesters(null);
    }
  }, [grade]);

  const onHandleChange = (e) => {
    setGrade(e.target.value);
    if (e.target.value == 9 || e.target.value == 10) {
      setSubjects(_subjects.matric);
    } else if (e.target.value == 11 || e.target.value == 12) {
      setSubjects(_subjects.fsc);
    } else {
      setSubjects([]);
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        {selectedGrade == "matric" || selectedGrade == "fsc" ? (
          <SelectField required={true} name="subject" options={subjects} />
        ) : selectedGrade == "dae" ||
          selectedGrade == "bacholer" ||
          selectedGrade == "master" ? (
          <InputField
            name="subject"
            required={true}
            errors={errors}
            touched={touched}
          />
        ) : (
          ""
        )}
      </div>
      <div className="col-6">
        {selectedGrade == "dae" ||
        selectedGrade == "bacholer" ||
        selectedGrade == "master" ? (
          <SelectField required={true} name="semester" options={semesters} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Subjects;
