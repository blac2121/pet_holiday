import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Layout = (props) => {
  return (
    <>
      <Nav />
      <MainContainer>{props.children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;