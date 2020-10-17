import React,{Component} from 'react';
import ButtonNavbar from './buttonnavbar';

import './navbar.css';
import logo from './logo1.png';


class Navbar extends Component{

 

    update = (x) => {
        this.props.triggeraaa(x);
    };

    render(){
        return(
            <div id="navbar">
                <img id="logoYossi" alt="" src={logo}/>
                <ButtonNavbar trigger={(i) => this.update(i)} valueButton="בית"/>
                <ButtonNavbar trigger={(i) => this.update(i)} valueButton="על עצמי"/>
                <ButtonNavbar trigger={(i) => this.update(i)} valueButton="גלריה"/>
                <ButtonNavbar trigger={(i) => this.update(i)} valueButton="צור קשר"/>
                <div id="facebook">
                    <button id="facebutton" href="www.one.co.il"></button> 
                </div>
            </div>
        
        
        )  
    };
}

export default Navbar;