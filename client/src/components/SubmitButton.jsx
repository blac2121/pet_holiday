import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #DAAB5E; 
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;
  width: 100px;
  margin: 20px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 425px) {
    width: 225px;
  }
`

const SubmitButton = (props) => {

  return (
    <Button onClick={props.handleClick}>{props.label}</Button>
  )
  
}

export default SubmitButton;