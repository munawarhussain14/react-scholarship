import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/schemes/Home";
import Search from "./components/schemes/Search";
import GeneralScholarship from "./components/schemes/GeneralScholarship";
import General from "./components/schemes/scholarship/General";
import LabourContext from "./context/labourContext";

function App() {
  const [labour, setLabour] = useState(null);
  const handleLabour = (labour) => {
    setLabour(labour);
  };

  return (
    <LabourContext.Provider value={{ labour: labour }}>
      <div className="container" style={{ width: "80%" }}>
        <Routes>
          <Route path="/" element={<Search onLoadLabour={handleLabour} />} />
          <Route path="schemes" element={<Home />} />
          <Route path="schemes/scholarship" element={<GeneralScholarship />} />
          <Route path="schemes/scholarship/apply" element={<General />} />
          <Route path="schemes/scholarship/apply/:id" element={<General />} />
        </Routes>
      </div>
    </LabourContext.Provider>
  );
}

export default App;
