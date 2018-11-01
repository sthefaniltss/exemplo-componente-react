import React,  { Component }  from 'react';
import logo from './logo.png';
import Menu from '../Menu/Menu';
import './Navbar.css';

class Navbar extends Component{
    constructor (props) {
        super(props);
    }
    render (){
        return (
            <header className="navbar">
                <a href="/">
                    <img className="navbar__logo" src={logo} alt="Logo"/>
                </a>

                <Menu/>

            </header>
        )
    }
}

export default Navbar;