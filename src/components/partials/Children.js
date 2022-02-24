import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LabourContext from "../../context/labourContext";
import useLabour from "../../hooks/useLabour";

const Children = () => {
  const labourContext = useContext(LabourContext);
  const getDate = (dob) => {
    let date = new Date(dob);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name:</th>
          <th>Father Name:</th>
          <th>Date of Birth:</th>
          <th>Gender:</th>
          <th>Form-B No:</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {labourContext.labour
          ? labourContext.labour.children.map((child) => (
              <tr key={child.id}>
                <td>{child.name}</td>
                <td>{labourContext.labour.name}</td>
                <td>{getDate(child.dob)}</td>
                <td>{child.gender}</td>
                <td>{child.reg_no}</td>
                <td>
                  <Link
                    to={`apply/${child.id}`}
                    className="btn btn-btn btn-primary"
                  >
                    Apply
                  </Link>
                </td>
              </tr>
            ))
          : ""}
        <tr>
          <td colSpan="6" className="text-center">
            <p className="urdu text-center">
              اگر آپ نئے بچے کے لیے اپلائی کرنا چاہتے ہیں تو نیچے دیے گئے اپلائی
              بٹن پر کلک کریں
            </p>
            <Link to="apply" className="btn btn-btn btn-primary">
              Apply for New Child
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Children;
