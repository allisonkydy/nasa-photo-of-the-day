import React from 'react';

function Description(props) {

   if (!props.date) return <h3>Loading...</h3>;

   const formatDate = () => {
      const date = props.date;
      const day = date.slice(8);
      const month = date.slice(5, 7);
      const year = date.slice(0, 4);
      let newDate = [];

      switch(month) {
         case '01':
            newDate.push('January ');
            break;
         case '02':
            newDate.push('February ');
            break;
         case '03':
            newDate.push('March ');
            break;
         case '04':
            newDate.push('April ');
            break; 
         case '05':
            newDate.push('May ');
            break;
         case '06':
            newDate.push('June ');
            break;
         case '07':
            newDate.push('July ');
            break;
         case '08':
            newDate.push('August ');
            break; 
         case '09':
            newDate.push('September ');
            break;
         case '10':
            newDate.push('October ');
            break;
         case '11':
            newDate.push('November ');
            break;
         case '12':
            newDate.push('December ');
            break;       
      }
      
      newDate.push(`${day}, `);
      newDate.push(year);

      return newDate.join('');
   }

   return (
      <div>
         <h3>{formatDate(props.date)}</h3>
         <h2>{props.title}</h2>
         <p>{props.expl}</p>
      </div>
   );
}

export default Description;