import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`

const Title = styled.h1`
  color: #DAAB5E;
  font-size: 48px;
  margin: 30px 40px 40px;
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