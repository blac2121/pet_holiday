import React from 'react';
import HouseholdCard from './HouseholdCard';


const HouseholdList = (props) => {

  const HouseholdCardJSX = props.households.map((household, index) => (
    <HouseholdCard
      key={index}
      id={household.id}
      name={household.name}      
    />
  ));

 
  return (
    <div>
      <h1>hello</h1>
      {HouseholdCardJSX}
    </div>
  );
}

export default HouseholdList;
