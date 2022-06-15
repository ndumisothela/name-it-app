import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ suggestedName }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card_link"
      href={`${nameCheapUrl}${suggestedName}`}
    >
      <div className="results_name_card">
        <p className="result_name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default NameCard;
