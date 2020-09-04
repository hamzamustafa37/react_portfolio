import React,{Component} from 'react';
import Background from  './Img/hero_img.jpg'
import './header.css'


const mystyles={
    backgroundImage:`url(${Background})`,
    height:'70vh',
    backgroundSize:'cover'
}

class Header extends React.Component {
  
   
    render(){
        return(
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p>A free Developer Ideas by using rich react</p>
        <a href="#button">{this.props.button}</a>
 
            </header>


        );
    }

};
export default Header;