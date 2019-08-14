import React from 'react';
import Date from './Date';

function Description(props) {
   return (
      <div>
         <Date date={props.date}/>
         <h2>{props.title}</h2>
         <p>{props.expl}</p>
      </div>
   );
}

export default Description;