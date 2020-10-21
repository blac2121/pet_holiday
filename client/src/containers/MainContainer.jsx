import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getAllHouseholds, postHousehold, putHousehold, postPet } from '../services/households';

import HouseholdList from '../screens/home/HouseholdList';
import Household from '../screens/dashboard/HouseholdDashboard';
import HouseholdCreate from '../screens/home/HouseholdCreate';
import HouseholdEdit from '../screens/home/HouseholdEdit';
import PetCreate from '../screens/dashboard/pets/PetCreate';
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


  const handlePetCreate = async (petData) => {
    const newPet = await postPet(petData);
    setPets(prevState => ([...prevState, newPet]));
    // history.push('/households')
  }



  return (
    <Switch>
      <Route path='/households/new'>
        <HouseholdCreate handleHouseholdCreate={handleHouseholdCreate} />         
      </Route>  
      <Route path='/households/:id/edit'>
        <HouseholdEdit handleHouseholdEdit={handleHouseholdEdit} />         
      </Route>      
      <Route path='/households/:id/pets/new'>
        <PetCreate handlePetCreate={handlePetCreate} />         
      </Route>      
      <Route path='/households/:id'>
        <Household households={households} />
      </Route>
      <Route path='/'>
        <HouseholdList households={households} />
      </Route>      
      {/* <Route path='/foods/:id/edit'>
        <FoodEdit
          handleFoodEdit={handleFoodEdit}
          foods={foods}
        />
      </Route> */}

      {/* <Route path='/foods'>
        <Foods
          foods={foods}
        />
      </Route> */}
    </Switch>
  )
}

export default MainContainer;