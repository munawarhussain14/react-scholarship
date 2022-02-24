import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";
import schemes from "../../data/schemes";
import useLabour from "../../hooks/useLabour";

const Home = () => {
  useLabour();

  return (
    <Fragment>
      <Header />
      <div className="list-container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <h2>Welfare Schemes</h2>
              </div>
              <div className="col-6">
                <h2 className="urdu-container">
                  <label className="urdu">فلاحی اسکیمیں</label>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="accordion" id="scheme_container">
                {schemes.map((scheme) => (
                  <div className="accordion-item" key={scheme._id}>
                    <h2
                      className="accordion-header"
                      id={"heading" + scheme._id}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#" + scheme._id}
                        aria-expanded="true"
                        aria-controls={scheme._id}
                      >
                        <div style={{ width: "100%" }}>
                          <div className="row">
                            <div className="col-lg-6">{scheme.title.eng}</div>
                            <div className="col-lg-6 urdu-container">
                              <span className="urdu">{scheme.title.urdu}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id={scheme._id}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div>{scheme.detail.eng}</div>
                        <div className="urdu text-right">
                          {scheme.detail.urdu}
                        </div>
                        <Link className="btn btn-primary" to={scheme.to}>
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
