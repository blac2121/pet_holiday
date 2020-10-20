import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneHousehold  } from '../../services/households';
import PetCard from './pets/PetCard';
import FamilyDetailCard from './familydetails/FamilyDetailCard';


const Household = () => {
  // const [household, setHousehold] = useState([]);

  // const { id } = useParams(); 

  // useEffect(() => {
  //   const fetchHousehold = async () => {
  //     const householdData = await getOneHousehold(id);
  //     setHousehold(householdData);
  //   }
  //   fetchHousehold();
  // }, [id])

  // const petCardJSX = household.map((pet, index) => (
  //   <PetCard
  //     key={index}
  //     id={pet.id}
  //     name={pet.name}      
  //   />
  // ));

  // const familyDetailCardJSX = household.map((familycard, index) => (
  //   <FamilyDetailCard
  //     key={index}
  //     id={familycard.id}
  //     name={familycard.name}      
  //   />
  // ));

  // const contactCardJSX = props.households.map((household, index) => (
  //   <HouseholdCard
  //     key={index}
  //     id={household.id}
  //     name={household.name}      
  //   />
  // ));

 
  return (
    <div>
      <h3>Household</h3>
      {/* <div>
        {petCardJSX}
      </div>
      <div>
        {familyDetailCardJSX}
      </div> */}
    </div>
  );
}

export default Household;