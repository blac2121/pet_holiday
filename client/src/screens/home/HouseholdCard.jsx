import React from 'react';
import { Link } from "react-router-dom";

const HouseholdCard = (props) => {  
  return (
    <Link to={`/households/${props.id}`}>
      <div>
        <h3>{props.name}</h3>
      </div>      
    </Link>
  );
}

export default HouseholdCard;