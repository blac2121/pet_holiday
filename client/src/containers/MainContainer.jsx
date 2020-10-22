import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getAllHouseholds, postHousehold, putHousehold, deleteHousehold } from '../services/households';
import { postPet, putPet, deletePet } from '../services/pets';

import HouseholdList from '../screens/home/HouseholdList';
import Household from '../screens/dashboard/HouseholdDashboard';
import HouseholdCreate from '../screens/home/HouseholdCreate';
import HouseholdEdit from '../screens/home/HouseholdEdit';
import PetCreate from '../screens/dashboard/pets/PetCreate';
import PetEdit from '../screens/dashboard/pets/PetEdit';
// import FoodEdit from '../screens/FoodEdit';
// import FoodDetail from '../screens/FoodDetail';

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
    history.push('/households')
  }

  const handleHouseholdEdit = async (id, householdData) => {
    const updatedHousehold = await putHousehold(id, householdData);
    setHouseholds(prevState => prevState.map(household => {
      return household.id === Number(id) ? updatedHousehold : household
    }))
    history.push('/households')
  }

  const handleDelete = async (id) => {
    const removeHousehold = await deleteHousehold(id);
    const HouseholdsData = await getAllHouseholds();
    setHouseholds(HouseholdsData);
    history.push('/households')
  }

  const handlePetCreate = async (id, petData) => {
    const newPet = await postPet(parseInt(id), petData);
    setPets(prevState => ([...prevState, newPet]));
    history.push(`/households/${id}`)
  }

  const handlePetEdit = async (id, petData) => {
    const updatedHousehold = await putPet(id, petData);
    setHouseholds(prevState => prevState.map(household => {
      return household.id === Number(id) ? updatedHousehold : household
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
      {/* <Route path='/households/:id/pets/new'>
        <PetCreate handlePetCreate={handlePetCreate} />         
      </Route>  
      <Route path='/households/:id/pets/:pet_id/edit'>
        <PetEdit handlePetEdit={handlePetEdit} households={households} />
      </Route>       */}
      <Route path='/households/:id'>
        <Household households={households} handleDelete={handleDelete} />
      </Route>      
      <Route exact path='/households'>
        <HouseholdList households={households} />
      </Route>      

      {/* <Route path='/foods'>
        <Foods
          foods={foods}
        />
      </Route> */}
    </Switch>
  )
}

export default MainContainer;