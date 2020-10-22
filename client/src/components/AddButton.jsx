import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border: 1px solid #DFDFDF;
  background-color: #DAAB5E;
  color: white;
  padding: 15px 32px;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;


  &:hover {
    background: #C3C1C1;
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