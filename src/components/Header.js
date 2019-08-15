import React from 'react';
import styled from 'styled-components';

import logo from '../assets/nasa-logo.png';

function ApodHeader() {
   const Container = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
   `

   const Logo = styled.img`
      transform: scale(0.7);
   `

   const Header = styled.h1`
      text-align: center;
      font-family: 'Lexend Mega', sans-serif;
      color: #eaeaea;      
   `

   return (
      <Container>
         <Logo src={logo} alt='NASA logo' />
         <Header>Astronomy Picture of the Day</Header>
      </Container>
   );
}

export default ApodHeader;
