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
import _heading from "../../../data/heading.json";
import Subjects from "../../partials/Subject";
import MarksContainer from "../../partials/Marks";
import * as Yup from "yup";
import { number } from "yup";

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

  const onHandleChange = (value) => {
    setGrade(value);
    /*if (grade != 1) {
      console.log("Test");
      SignupSchema.obtained_marks = Yup.number().required(
        "Please provide Obtained Marks"
      );
      SignupSchema.total_marks = Yup.number().required(
        "Please provide Total Marks"
      );
      SignupSchema.passing_year = Yup.number().required(
        "Please enter Passing Year"
      );
    } else {
      SignupSchema.obtained_marks = Yup.number();
      SignupSchema.total_marks = Yup.number();
      SignupSchema.passing_year = Yup.number();
    }*/
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Please enter student Name"),
    reg_no: Yup.string()
      .min(15, "Invalid Regestration No")
      .max(15, "Invalid Regestration No")
      .required("Please provide Form-B Registration No"),
    dob: Yup.string().required("Please enter Date of Birth"),
    gender: Yup.string().required("Please select Gender"),
    class: Yup.number().required("Please select Class"),
    institute: Yup.string().required("Please provide Institute"),
    subject: Yup.string().when("class", {
      is: (value) =>
        value == 10 || value == 11 || value == 12 || value == 13 || value == 16,
      then: Yup.string().required("Please select Subject"),
      otherwise: Yup.string(),
    }),
    obtained_marks: Yup.number().when(
      ["class", "obtained_marks", "total_marks"],
      {
        is: (value, obtained, total) => value != 1 && obtained <= total,
        then: Yup.number().required("Invalid Obtained Marks"),
        otherwise: Yup.number(),
      }
    ),
    total_marks: Yup.number().when("class", {
      is: (value) => value != 1,
      then: Yup.number().required("Invalid Total Marks"),
      otherwise: Yup.number(),
    }),
    passing_year: Yup.number().when("class", {
      is: (value) => value != 1,
      then: Yup.number().required("Please provide Passing Marks"),
      otherwise: Yup.number(),
    }),
  });

  return (
    <Fragment>
      <Header />
      <div className="list-container" style={{ marginTop: "50px" }}>
        <Formik
          validationSchema={SignupSchema}
          enableReinitialize={true}
          initialValues={{
            name: student["name"] || "",
            reg_no: student["reg_no"] || "",
            dob: student["dob"] || "",
            gender: student["gender"] || "",
            class: student["class"] || "",
            institute: student["institute"] || "",
            obtained_marks: student["obtained_marks"] || "",
            total_marks: student["total_marks"] || "",
            passing_year: student["passing_year"] || "",
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            resetForm,
          }) => {
            return (
              <Form>
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title">
                      <div className="row">
                        <div className="col-sm-6 col-6">
                          <span className="english">
                            {_heading.student_area.title.eng}
                          </span>
                        </div>
                        <div className="col-sm-6 col-6 text-right">
                          <span className="urdu">
                            {_heading.student_area.title.urdu}
                          </span>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="col-6">
                    <InputField
                      name="name"
                      required={true}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-6">
                    <InputField
                      name="reg_no"
                      required={true}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-6">
                    <InputField
                      name="dob"
                      required={true}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="col-6">
                    <SelectField
                      name="gender"
                      errors={errors}
                      touched={touched}
                      options={[
                        { value: "male", text: "Male" },
                        { value: "female", text: "Female" },
                      ]}
                    />
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="section-title">
                      <div className="row">
                        <div className="col-sm-6 col-6">
                          <span className="english">
                            {_heading.education_area.title.eng}
                          </span>
                        </div>
                        <div className="col-sm-6 col-6 text-right">
                          <span className="urdu">
                            {_heading.education_area.title.urdu}
                          </span>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <SelectField
                      onChange={(e) => {
                        setFieldValue("class", e.target.value);
                        onHandleChange(e.target.value);
                      }}
                      required={true}
                      errors={errors}
                      touched={touched}
                      name="class"
                      options={classes}
                    />
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <InputField
                      name="institute"
                      required={true}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <Subjects
                    onSetField={setFieldValue}
                    errors={errors}
                    touched={touched}
                    grade={grade}
                    options={subjects}
                  />
                  <MarksContainer
                    grade={grade}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Fragment>
  );
};

export default General;
