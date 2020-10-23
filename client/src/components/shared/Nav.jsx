import React from 'react';
import { Link } from 'react-router-dom';
import DogLogo from '../../assets/dog-butt-4290620_640.png'
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`

const Title = styled.h1`
  color: #DAAB5E;
  font-size: 48px;
  margin: 30px 40px 40px;
`

const Logo = styled.img`
  height: 150px;
  width: 150px;
`

const Nav = () => {  
  return (
    <MainContainer>
      <Link to='/'>       
        <LogoContainer>
          <Logo src={DogLogo} alt="Pet Holiday Logo" />
          <Title>Pet Holiday</Title>
        </LogoContainer>       
      </Link>      
    </MainContainer>
  );
};

export default Nav;