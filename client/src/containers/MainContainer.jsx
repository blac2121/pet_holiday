import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { getAllHouseholds, getOneHousehold  } from '../services/households';
// import { getAllFoods, postFood, putFood } from '../services/foods';

import HouseholdList from '../screens/home/HouseholdList';
import Household from '../screens/dashboard/HouseholdDashboard';
// import FoodCreate from '../screens/FoodCreate';
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

  console.log(households);
  // const handleFoodCreate = async (foodData) => {
  //   const newFood = await postFood(foodData);
  //   setFoods(prevState => ([...prevState, newFood]));
  //   history.push('/foods')
  // }

  // const handleFoodEdit = async (id, foodData) => {
  //   const updatedFood = await putFood(id, foodData);
  //   setFoods(prevState => prevState.map(food => {
  //     return food.id === Number(id) ? updatedFood : food
  //   }))
  //   history.push('/foods')
  // }

  return (
    <Switch>
      <Route path='/households/:id'>
        <Household households={households} />
      </Route>
      <Route path='/'>
        <HouseholdList households={households} />
      </Route>      
      {/* <Route path='/foods/new'>
        <FoodCreate handleFoodCreate={handleFoodCreate} />         
      </Route> */}
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