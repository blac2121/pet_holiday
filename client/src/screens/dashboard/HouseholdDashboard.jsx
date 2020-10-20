import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneHousehold } from '../../services/households';
import Layout from '../../components/shared/Layout';
import PetCard from './pets/PetCard';
import FamilyDetailCard from './familydetails/FamilyDetailCard';


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

  console.log(household);


  const petData = household.pets 
  console.log(petData);


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
  
  // const contactCardJSX = props.households.map((household, index) => (
  //   <HouseholdCard
  //     key={index}
  //     id={household.id}
  //     name={household.name}      
  //   />
  // ));

 
  return (
    <Layout>
      <h3>Household</h3>
      <div>
        {petCardJSX}
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
    </Layout>
  );
}

export default Household;