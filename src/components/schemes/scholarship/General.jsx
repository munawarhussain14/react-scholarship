import React, { Fragment, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useLabour from "../../../hooks/useLabour";
import Header from "../../layout/Header";
import LabourContext from "../../../context/labourContext";
import { Formik, Field, Form } from "formik";
import InputField from "../../layout/form/inputField";
import SelectField from "../../layout/form/selectField";
import classes from "../../../data/classes.json";
import _subjects from "../../../data/subjects.json";
import Subjects from "../../partials/Subject";

const General = () => {
  const labourContext = useContext(LabourContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const [grade, setGrade] = useState(0);

  useLabour();

  useEffect(() => {
    if (params.id) {
      let child = labourContext.labour.children.filter(
        (v) => v.id == params.id
      );
      if (child.length > 0) {
        child = child[0];
        setStudent(child);
      }
    }
  }, [student]);

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
    <Fragment>
      <Header />
      <div className="list-container" style={{ marginTop: "50px" }}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: student["name"] || "",
            reg_no: student["reg_no"] || "",
            dob: student["dob"] || "",
            gender: student["gender"] || "",
          }}
        >
          <Form>
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title">
                  <div className="row">
                    <div className="col-sm-6 col-6">
                      <span className="english">
                        Student Personal Information
                      </span>
                    </div>
                    <div className="col-sm-6 col-6 text-right">
                      <span className="urdu">طالب علم کے ذاتی کوائف</span>
                    </div>
                  </div>
                </h2>
              </div>
              <div className="col-6">
                <InputField name="name" required={true} />
              </div>
              <div className="col-6">
                <InputField name="reg_no" required={true} />
              </div>
              <div className="col-6">
                <InputField name="dob" required={true} />
              </div>
              <div className="col-6">
                <SelectField
                  name="gender"
                  options={[
                    { value: "male", text: "Male" },
                    { value: "female", text: "Female" },
                  ]}
                />
              </div>
              <div className="col-3">
                <SelectField
                  onChange={onHandleChange}
                  required={true}
                  name="class"
                  options={classes}
                />
              </div>
              <div className="col-9">
                <InputField name="institute" required={true} />
              </div>
            </div>
            <Subjects grade={grade} options={subjects} />
          </Form>
        </Formik>
      </div>
    </Fragment>
  );
};

export default General;
