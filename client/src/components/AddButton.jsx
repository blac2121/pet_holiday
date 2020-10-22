import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border: 1px solid #DFDFDF;
  color: #3A3A3A;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;


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