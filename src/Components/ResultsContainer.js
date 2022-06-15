import React from "react";
import NameCard from "./NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames }) => {
  const suggestNameJsx = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });

  return <div className="results_container">{suggestNameJsx}</div>;
};

export default ResultsContainer;