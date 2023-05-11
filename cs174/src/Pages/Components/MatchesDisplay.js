import React from "react";
import './MatchesDisplay.css';

const MatchesDisplay = (props) => {
  const { pet } = props;

  return (
    <div className="match">
        {pet && (
            <>
                <div className = "petInfo">
                    <h1>{pet.name}</h1>
                    <h3>{pet.Details}</h3>
                    <button className = "adoptBtn">Adopt</button>
                </div>
                <div>
                    <img src={pet.url} alt={pet.name} class = "image"/>
                </div>
            </>
        )}
    </div>
  );
};

export default MatchesDisplay;