import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getAllHouseholds, postHousehold, putHousehold, deleteHousehold } from '../services/households';
import { postPet, putPet } from '../services/pets';
import { postContact, putContact } from '../services/contacts';

import HouseholdList from '../screens/home/HouseholdList';
import Household from '../screens/dashboard/HouseholdDashboard';
import HouseholdCreate from '../screens/home/HouseholdCreate';
import HouseholdEdit from '../screens/home/HouseholdEdit';

import PetCreate from '../screens/dashboard/pets/PetCreate';
import PetEdit from '../screens/dashboard/pets/PetEdit';

import ContactCreate from '../screens/dashboard/contacts/ContactCreate';
import ContactEdit from '../screens/dashboard/contacts/ContactEdit';

const MainContainer = () => {
  const [households, setHouseholds] = useState([]);
  const [pets, setPets] = useState([]);
  const [contacts, setContacts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchHouseholds = async () => {
      const HouseholdsData = await getAllHouseholds();
      setHouseholds(HouseholdsData);
    }  
    fetchHouseholds();
  }, [])

  const handleHouseholdCreate = async (householdData) => {
    const newHousehold = await postHousehold(householdData);
    setHouseholds(prevState => ([...prevState, newHousehold]));
    history.push('/')
  }

  const handleHouseholdEdit = async (id, householdData) => {
    const updatedHousehold = await putHousehold(id, householdData);
    setHouseholds(prevState => prevState.map(household => {
      return household.id === Number(id) ? updatedHousehold : household
    }))
    history.push('/')
  }

  const handleHouseholdDelete = async (id) => {
    await deleteHousehold(id);
    const HouseholdsData = await getAllHouseholds();
    setHouseholds(HouseholdsData);
    history.push('/')
  }

  const handlePetCreate = async (id, petData) => {
    const newPet = await postPet(parseInt(id), petData);
    setPets(prevState => ([...prevState, newPet]));
    history.push(`/households/${id}`)
  }

  const handlePetEdit = async (id, petData, pet_id) => {
    const updatedPet = await putPet(id, petData, pet_id);
    setPets(prevState => prevState.map(pet => {
      return pet.id === Number(pet_id) ? updatedPet : pet
    }))
    history.push(`/households/${id}`)
  }

  const handleContactCreate = async (id, contactData) => {
    const newContact = await postContact(parseInt(id), contactData);
    setContacts(prevState => ([...prevState, newContact]));
    history.push(`/households/${id}`)
  }

  const handleContactEdit = async (id, contactData, contact_id) => {
    const updateContact = await putContact(id, contactData, contact_id);
    setContacts(prevState => prevState.map(contact => {
      return contact.id === Number(contact_id) ? updateContact : contact
    }))
    history.push(`/households/${id}`)
  }

  return (
    <Switch>
      <Route path='/households/new'>
        <HouseholdCreate handleHouseholdCreate={handleHouseholdCreate} />         
      </Route>  
      <Route path='/households/:id/edit'>
        <HouseholdEdit handleHouseholdEdit={handleHouseholdEdit} households={households} />         
      </Route>  
      <Route path='/households/:id/pets/new'>
        <PetCreate handlePetCreate={handlePetCreate} />         
      </Route>  
      <Route path='/households/:id/pets/:pet_id/edit'>
        <PetEdit handlePetEdit={handlePetEdit} />
      </Route>     
      <Route path='/households/:id/contacts/new'>
        <ContactCreate handleContactCreate={handleContactCreate} />         
      </Route>  
      <Route path='/households/:id/contacts/:contact_id/edit'>
        <ContactEdit handleContactEdit={handleContactEdit} />
      </Route>  
      <Route path='/households/:id'>
        <Household households={households} handleHouseholdDelete={handleHouseholdDelete} />
      </Route>      
      <Route exact path='/'>
        <HouseholdList households={households} />
      </Route>      
    </Switch>
  )
}

export default MainContainer;