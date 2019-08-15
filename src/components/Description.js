import React from 'react';
import styled from 'styled-components';

function Description(props) {
   const Container = styled.div`
      max-width: 700px;
      margin-left: 40px;
   `

   const Title = styled.h2`
      font-family: 'Lexend Mega', sans-serif;
      color: #eaeaea;
   `

   const Explanation = styled.p`
      color: #dddddd;
      line-height: 1.5;
   `

   return (
      <Container>
         <Title>{props.title}</Title>
         <Explanation>{props.expl}</Explanation>
      </Container>
   );
}

export default Description;
