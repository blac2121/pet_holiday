import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneHousehold } from '../../services/households';
import { deletePet } from '../../services/pets';
import { deleteContact } from '../../services/contacts';

import Layout from '../../components/shared/Layout';
import PetCard from './pets/PetCard';
import FamilyDetailCard from './familydetails/FamilyDetailCard';
import ContactCard from './contacts/ContactCard';
import AddButton from '../../components/AddButton';

import styled from 'styled-components';

const TitleMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  border: 1px solid #DFDFDF;
  margin: 40px auto;
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px 30px 0px;
`

const PetsContainer = styled.div`
  width: 50vw;
`

const FamAndContactContainer = styled.div`
  width: 30vw;
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

const Household = (props) => {
  const [household, setHousehold] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchHousehold = async () => {
      const householdData = await getOneHousehold(id);
      setHousehold(householdData);
    }
    fetchHousehold();
  }, [id])

  const handlePetDelete = async (id, pet_id) => {
    await deletePet(id, pet_id);
    const PetData = await getOneHousehold(id);
    setHousehold(PetData);
  }

  const handleContactDelete = async (id, contact_id) => {
    await deleteContact(id, contact_id);
    const contactData = await getOneHousehold(id);
    setHousehold(contactData);
  }

  const petData = household.pets 
  const petCardJSX = petData && petData.map((pet, index) => (
    <PetCard
      key={index}
      petID={pet.id}
      name={pet.name}
      age={pet.age}
      medical={pet.medical_description}
      feeding={pet.feeding_description}
      notes={pet.notes}
      household={household}
      handlePetDelete={handlePetDelete}
    />
  ));

  const contactData = household.contacts 
  const contactCardJSX = contactData && contactData.map((contact, index) => (
    <ContactCard
      key={index}
      contactID={contact.id}
      name={contact.name} 
      relationship={contact.relationship} 
      phoneNum={contact.phone_num} 
      notes={contact.notes} 
      household={household}
      handleContactDelete={handleContactDelete}
    />
  ));

  const { handleHouseholdDelete } = props;

  const handleClick = (e) => {
    e.preventDefault();
    handleHouseholdDelete(id);
  }

  return (
    <Layout>      
      <TitleMainContainer>
        <MainContainer>
        <PetsContainer>
          <Panel>         
            <HeaderContainer>
              <PetTitle>Pets</PetTitle>
              <Link to={`/households/${id}/pets/new`}>
                <AddButton />
              </Link>                             
            </HeaderContainer>
            <div>
              {petCardJSX}
            </div>               
          </Panel>
        </PetsContainer>
        <FamAndContactContainer>
          <Panel>
            <div>
              <FamilyDetailTitle>{household.name}</FamilyDetailTitle>
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
              <button onClick={handleClick}>Delete</button>  
            </div>
          </Panel>
          <Panel>
            <HeaderContainer>
              <ContactTitle>Contacts</ContactTitle>
              <Link to={`/households/${id}/contacts/new`}>
                <AddButton />
              </Link>    
            </HeaderContainer>
            <div>{contactCardJSX}</div>
          </Panel>        
        </FamAndContactContainer>
      </MainContainer>
      </TitleMainContainer>
    </Layout>
  );
}

export default Household;