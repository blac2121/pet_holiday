import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HouseholdContainer = styled.div`
  border: 3px solid #DAAB5E;
  border-radius: 3px;
  width: 60vw;
  margin: 30px;
  padding-left: 25px;
`

const HouseholdTitle = styled.h4`
  font-size: 24px;
`

const HouseholdCard = (props) => {  
  return (
    <Link to={`/households/${props.id}`}>
      <HouseholdContainer>
        <HouseholdTitle>{props.name}</HouseholdTitle>
      </HouseholdContainer>      
    </Link>  
  );
}

export default HouseholdCard;