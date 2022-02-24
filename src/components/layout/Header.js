import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-2">
          <img
            width="100"
            alt="Commissionerate of Mines Labour"
            src="/assets/images/logo.png"
          />
        </div>
        <div className="col-10">
          <h1 className="text-center">
            COMMISSIONERATE OF MINES LABOUR WELFARE KHYBER PAKHTUNKHWA
          </h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
