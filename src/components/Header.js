import React from 'react';
import styled from 'styled-components';

import logo from '../assets/nasa-logo.png';

function ApodHeader() {
   const Container = styled.div`
      margin: 20px auto 30px;
      display: flex;
      align-items: center;
      justify-content: center;
   `

   const Logo = styled.img`
      transform: scale(0.7);
   `

   const Header = styled.h1`
      text-align: center;      
   `

   return (
      <Container>
         <Logo src={logo} alt='NASA logo' />
         <Header>Astronomy Picture of the Day</Header>
      </Container>
   );
}

export default ApodHeader;
