import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border: 3px solid #DAAB5E;
  background-color: white;
  color: #DAAB5E;
  padding: 15px 32px;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 700;


  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 425px) {
    width: 225px;
  }
`

const AddButton = () => {

  return (
    <Button>Add</Button>
  )
  
}

export default AddButton;