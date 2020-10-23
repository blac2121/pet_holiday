import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/shared/Layout';
import HouseholdCard from './HouseholdCard';
import AddButton from '../../components/AddButton';

import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid #DFDFDF;
  margin: 80px auto;
  background-color: #F0F0F0;
  width: 75vw;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 62vw;
  margin 60px 0 30px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const HouseholdTitle = styled.h3`
  display: flex;
  color: #DAAB5E;
  font-size: 36px;
  color: #488047;
  padding: 0;
  margin: 0;

  @media (max-width: 480px) {
    margin: 30px;
  }
`

const HouseholdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <MainContainer>
        <HeaderContainer>
          <HouseholdTitle>Households</HouseholdTitle>
          <Link to='/households/new'>
            <AddButton />
          </Link>        
        </HeaderContainer>   
        <HouseholdContainer>
          {HouseholdCardJSX}
        </HouseholdContainer>        
      </MainContainer>
    </Layout>
  );
}

export default HouseholdList;
