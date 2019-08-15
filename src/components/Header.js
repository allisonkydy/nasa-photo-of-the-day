import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

import logo from '../assets/nasa-logo.png';

function ApodHeader() {
   return (
      <div className="header">
         <img src={logo} alt='NASA logo' />
         <h1>Astronomy Picture of the Day</h1>
      </div>
   );
}

export default ApodHeader;
