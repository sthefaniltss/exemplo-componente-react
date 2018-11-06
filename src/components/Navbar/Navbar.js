import React,  { Component }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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

function passaNoPropsDadosDoEstado(state){
    return {
        usuario: state.usuario
    }

}
function passaNoPropsDisparadoresDeAcao(dispatch){
    return {
        deslogaUsuario: () =>{
            dispatch({type: 'DESLOGA_USUARIO'})
        }
    }
}
const conectaNaStore = connect(passaNoPropsDadosDoEstado, passaNoPropsDisparadoresDeAcao);
const NavbarConectada = conectaNaStore(Navbar);

export default NavbarConectada;