import React, { Component } from 'react';
import './Navigation.css'
import { render } from '@testing-library/react';

class Navigation extends Component{
  render(){
    const sections=['Home','Services','Contacts','About Us','Portfolio']
    const navlinks=sections.map(sections=>{
      return(
        <li><a href={'#'+ sections} >{sections}</a></li>
      )
    });
  return (
   <nav >
      <h2 className="logo">{this.props.logoTitle}</h2>
      <ul>
         {navlinks}
      </ul>
   </nav>
  );
  }
}

export default Navigation;
