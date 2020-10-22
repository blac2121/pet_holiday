import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  background-color: #DAAB5E;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  text-align: center;
`

const Attributions = styled.h6`
  color: white;
  font-size: 18px;
  margin: 30px auto;
`

const Footer = () => {  
  return (
    <MainContainer>
      <Attributions>Designed and handcrafted in small batches by BL</Attributions>    
    </MainContainer>
  );
};

export default Footer;