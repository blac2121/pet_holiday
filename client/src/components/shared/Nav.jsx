import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  background-color: #F9F9FA;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  background-color: #F9F9FA;
`

const Title = styled.h1`
  color: #DAAB5E;
  font-size: 48px;
  margin: 40px 50px 50px;
`

const Nav = () => {  
  return (
    <MainContainer>
      <Link to='/'>
        <Title>Pet Holiday</Title>
      </Link>      
    </MainContainer>
  );
};

export default Nav;