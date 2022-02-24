import React, { Fragment } from "react";
import useLabour from "../../hooks/useLabour";
import Header from "../layout/Header";
import Children from "../partials/Children";

const GeneralScholarship = () => {
  useLabour();

  return (
    <Fragment>
      <Header />
      <div className="list-container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col-12">
            <Children />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GeneralScholarship;
