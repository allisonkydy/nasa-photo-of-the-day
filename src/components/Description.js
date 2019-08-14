import React from 'react';

function Description(props) {
   return (
      <div>
         <h3>{props.date}</h3>
         <h2>{props.title}</h2>
         <p>{props.expl}</p>
      </div>
   );
}

export default Description;