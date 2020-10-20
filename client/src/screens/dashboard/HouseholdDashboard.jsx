import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneHousehold } from '../../services/households';
import Layout from '../../components/shared/Layout';
import PetCard from './pets/PetCard';
import FamilyDetailCard from './familydetails/FamilyDetailCard';
import ContactCard from './contacts/ContactCard';
import styled from 'styled-components';

const TitleMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid #DFDFDF;
  margin: 50px;
`

const MainContainer = styled.div`
  display: flex;
  margin: 10px 50px 30px;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #F9F9FA;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid #DFDFDF;
  background-color: #F9F9FA;
  margin: 30px;
`

const PetsContainer = styled.div`
  width: 50vw;
`

const FamAndContactContainer = styled.div`
  width: 30vw;
`

const HouseholdTitle = styled.h3`
  color: #DAAB5E;
  font-size: 36px;
  margin: 50px 0px 0px 80px;
`

const PetTitle = styled.h4`
  font-size: 28px;
  color: #488047;
  margin: 25px 0px 0px 25px;
`

const ContactTitle = styled.h4`
  font-size: 28px;
  color: #B85240;
  margin: 25px 0px 0px 25px;
`

const FamilyDetailTitle = styled.h4`
  font-size: 28px;
  color: #23309E;
  margin: 25px 0px 0px 25px;
`

const Household = () => {
  const [household, setHousehold] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchHousehold = async () => {
      const householdData = await getOneHousehold(id);
      setHousehold(householdData);
    }
    fetchHousehold();
  }, [id])

  const petData = household.pets 
  const petCardJSX = petData && petData.map((pet, index) => (
    <PetCard
      key={index}
      id={pet.id}
      name={pet.name}
      age={pet.age}
      medical={pet.medical_description}
      feeding={pet.feeding_description}
      notes={pet.notes}
    />
  ));

  const contactData = household.contacts 
  const contactCardJSX = contactData && contactData.map((contact, index) => (
    <ContactCard
      key={index}
      id={contact.id}
      name={contact.name} 
      relationship={contact.relationship} 
      phoneNum={contact.phone_num} 
      notes={contact.notes} 
    />
  ));

  return (
    <Layout>      
      <TitleMainContainer>
        <HouseholdTitle>Household</HouseholdTitle>
        <MainContainer>
        <PetsContainer>
          <Panel>         
            <div>
              <PetTitle>Pets</PetTitle>
            </div>
            <div>
              {petCardJSX}
            </div>               
          </Panel>
        </PetsContainer>
        <FamAndContactContainer>
          <Panel>
            <div>
              <FamilyDetailTitle>Family Details</FamilyDetailTitle>
            </div>
            <div>
              <FamilyDetailCard
                id={household.id}
                name={household.name} 
                street={household.street}
                city={household.city}
                state={household.state}
                zipCode={household.zip_code}
                tempLow={household.temp_low}
                tempHi={household.temp_high}
                wifiUsername={household.wifi_password}
                wifiPassword={household.wifi_username}
                notes={household.notes}
              />            
            </div>
          </Panel>
          <Panel>
            <div>
              <ContactTitle>Contacts</ContactTitle>
            </div>
            <div>{contactCardJSX}</div>
          </Panel>        
        </FamAndContactContainer>
      </MainContainer>
      </TitleMainContainer>
    </Layout>
  );
}

export default Household;