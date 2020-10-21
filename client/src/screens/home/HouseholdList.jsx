import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/shared/Layout';
import HouseholdCard from './HouseholdCard';
import AddButton from '../../components/AddButton';

import styled from 'styled-components';


const HouseholdContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const HouseholdTitle = styled.h3`
  color: #DAAB5E;
  font-size: 36px;
`


const HouseholdList = (props) => {

  const HouseholdCardJSX = props.households.map((household, index) => (
    <HouseholdCard
      key={index}
      id={household.id}
      name={household.name} 
      street={household.street}
      city={household.city}
      state={household.state}
      zipCode={household.zip_code}
    />
  ));

  return (
    <Layout>
      <HouseholdTitle>Households</HouseholdTitle>
      <Link to='/households/new'>
        <AddButton />
      </Link>    
      <HouseholdContainer>
        {HouseholdCardJSX}
      </HouseholdContainer>
    </Layout>
  );
}

export default HouseholdList;
