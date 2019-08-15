import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function ApodDatePicker(props) {
   if (!props.pickerDate) return <h3>Loading...</h3>;

   return (
      <div className="date-picker">
         <DatePicker
            dateFormat="MMMM d, yyyy"
            selected={props.pickerDate}
            onChange={props.handleDates}
            inline
         />
      </div>
   )
}

export default ApodDatePicker;
