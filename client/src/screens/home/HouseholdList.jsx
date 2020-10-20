import React from 'react';
import Layout from '../../components/shared/Layout';
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
    <Layout>
      <h3>Households</h3>
      <div>
        {HouseholdCardJSX}
      </div>
    </Layout>
  );
}

export default HouseholdList;
