import React from 'react';
import styled from 'styled-components';

function ApodImage(props) {
   const Container = styled.div`
      text-align: center;
   `

   return (
      <Container>
         <img src={props.url} alt='NASA Astronomy Picture of the Day' />
      </Container>
   )
}

export default ApodImage;
