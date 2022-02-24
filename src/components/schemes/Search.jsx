import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import InputMask from "react-input-mask";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader";
import { getLabour } from "../../services/labourServices";

const Search = ({ onLoadLabour }) => {
  const alert = useAlert();
  const navigate = useNavigate();
  const [record, setRecord] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cnic, setCnic] = useState("");
  const [error, setError] = useState("");
  const nodeRef = React.useRef(null);

  useEffect(() => {
    onLoadLabour(null);
  }, []);

  const handleCNIC = (e) => {
    setCnic(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cnic) {
      setError("CNIC Required");
    } else if (!/^[0-9]{5}[-]{1}[0-9]{7}[-]{1}[0-9]{1}$/i.test(cnic)) {
      setError("Invalid CNIC");
    } else {
      setError("");
      let response = await getLabour({ params: { cnic }, setLoading });
      if (response.status === 200) {
        alert.success(response.data.message);
        onLoadLabour(response.data.labour);
        navigate("/schemes");
      } else if (response.status === 204) {
        alert.info(response.data.message);
      } else {
        alert.error("Please contact the administrator");
      }
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="list-container" style={{ marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cnic" className="form-label">
              Labour CNIC{" "}
              <label className="urdu">( مزدور کاشناختی کارڈ نمبر )</label>
            </label>
            <InputMask
              disabled={loading}
              onChange={handleCNIC}
              mask="99999-9999999-9"
              className="form-control"
            />
            <div id="cnic" className="form-text">
              Please enter Valid CNIC
            </div>
            {error ? <p className="alert alert-danger">{error}</p> : ""}
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <div>
          {loading ? (
            <Loader />
          ) : record ? (
            <h1 className="text-center urdu error-message">
              آپ کا ریکارڈ نہیں ملا برائے مہربانی رجسٹر کریں۔
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
