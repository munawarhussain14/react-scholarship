import { useEffect, useContext } from "react";
import LabourContext from "../context/labourContext";
import { useNavigate } from "react-router-dom";

export default function useLabour() {
  let labourContext = useContext(LabourContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!labourContext.labour) {
      navigate("/", { replace: true });
    }
  }, [navigate, labourContext.labour]);
}
