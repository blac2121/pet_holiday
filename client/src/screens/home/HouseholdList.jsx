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
    // line 18 will be layout
    <div>
      <h3>Households</h3>
      <div>
        {HouseholdCardJSX}
      </div>
    </div>
  );
}

export default HouseholdList;
