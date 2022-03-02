import React, { Fragment, useEffect, useState } from "react";
import _classes from "../../data/numbers.json";
import InputField from "../layout/form/inputField";

const MarksContainer = ({ grade, errors, touched }) => {
  const [showGrade, setGrade] = useState("Previous Class Result");
  useEffect(() => {
    if (grade == 13) {
      setGrade(`${_classes["12"]}`);
    } else if (grade == 16) {
      setGrade(`${_classes["12"]}`);
    } else if (grade == 18) {
      setGrade(`${_classes["16"]}`);
    } else {
      const temp = Number(grade) - 1;
      setGrade(`${_classes[temp]}`);
    }
  }, [grade]);

  return (
    <Fragment>
      {grade != "" && grade != 1 ? (
        <Fragment>
          <div className="col-12">
            <div className="border">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <h5>
                    Please provide your
                    <span className="alert-danger"> {showGrade} </span>
                    and Passing
                  </h5>
                </div>
                <div className="col-lg-6 col-md-6">
                  <h5 className="urdu">
                    براہ کرم اپنی پچھلی جماعت کے کوائف درج کریں
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <InputField
              type="number"
              name="obtained_marks"
              required={true}
              errors={errors}
              touched={touched}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <InputField
              type="number"
              name="total_marks"
              required={true}
              errors={errors}
              touched={touched}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <InputField
              type="number"
              name="passing_year"
              required={true}
              errors={errors}
              touched={touched}
            />
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default MarksContainer;
