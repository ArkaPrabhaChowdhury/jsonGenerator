import React from "react";
import { useLocation } from "react-router-dom";
const ResultPage = () => {
  const location = useLocation();
  const formData = location.state;
  console.log(formData);
  return (
    <div>
      <h2>Form Data</h2>
      <p>{JSON.stringify(formData, null, 2)}</p>
    </div>
  );
};

export default ResultPage;
