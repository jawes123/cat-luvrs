import React from "react";
import './MatchesDisplay.css';

const MatchesDisplay = (props) => {
  const { pet } = props;
  let popup = document.getElementById("popup");
  function openPopup() {
      popup.classList.add("open-popup");
  }
  function closePopup() {
      popup.classList.remove("open-popup");
  }
  

  return (
    <div className="match">
        {pet && (
            <>
                <div className = "petInfo">
                    <h1>{pet.name}</h1>
                    <h3>{pet.details}</h3>
                    <button type="submit" className = "adoptBtn" onClick={openPopup}>Request Adoption</button>
                </div>
                <div>
                    <img src={pet.url} alt={pet.name} class = "image"/>
                </div>
                
            </>
        )}
        <div class="popup" id="popup">
                        
                        <h2>Adoption Request Sent!</h2>
                        <p>Your request has been successfully submitted. Thanks for your interest!</p>
                        <button type="button" onClick={closePopup}>OK</button>
                    </div>

       
    </div>
    
    
  );
  
};

export default MatchesDisplay;