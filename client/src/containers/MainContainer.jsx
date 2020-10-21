import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getAllHouseholds, getOneHousehold, postHousehold, postPet  } from '../services/households';
// import { getAllFoods, postFood, putFood } from '../services/foods';

import HouseholdList from '../screens/home/HouseholdList';
import Household from '../screens/dashboard/HouseholdDashboard';
import HouseholdCreate from '../screens/dashboard/household/HouseholdCreate';
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

  const handlePetCreate = async (petData) => {
    const newPet = await postPet(petData);
    setPets(prevState => ([...prevState, newPet]));
    // history.push('/households')
  }

  // const handleFoodEdit = async (id, foodData) => {
  //   const updatedFood = await putFood(id, foodData);
  //   setFoods(prevState => prevState.map(food => {
  //     return food.id === Number(id) ? updatedFood : food
  //   }))
  //   history.push('/foods')
  // }

  return (
    <Switch>
      <Route path='/households/new'>
        <HouseholdCreate handleHouseholdCreate={handleHouseholdCreate} />         
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