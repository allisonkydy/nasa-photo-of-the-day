import React from 'react';

function Description(props) {
   return (
      <div className="desc">
         <h2>{props.title}</h2>
         <p>{props.expl}</p>
      </div>
   );
}

export default Description;
