import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #42C9FB; 
  border: none;
  color: #3A3A3A;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background: #60ADCA;
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