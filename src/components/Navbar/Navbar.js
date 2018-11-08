import React,  { Component }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deslogaUsuario } from '../../redux/actions';
import Menu from '../Menu/Menu';
import logo from './logo.png';
import './Navbar.css';

class Navbar extends Component{
    constructor (props) {
        super(props);
    }
     
    render (){
        return (
            <header className="navbar">
                <Link to="/">
                    <img className="navbar__logo" src={logo} alt="Logo"/>
                </Link>

                <Menu deslogaUsuario={this.props.deslogaUsuario} usuario={this.props.usuario}/>

            </header>
        )
    }
}




export default withRouter(connect((state) =>({usuario: state.usuario}), {deslogaUsuario})(Navbar));