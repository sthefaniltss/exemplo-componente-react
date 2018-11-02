import React,  { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

class Menu extends Component{
    constructor (props) {
        super(props);
        this.state = {
            aberto: false
        }
    }
    abreOuFechaMenu = () =>{

        if(this.state.aberto){

            this.setState({aberto: false});
            
        } else{
            
            this.setState({aberto: true});

        }

    }
    sair = () => {
        this.abreOuFechaMenu();
        this.props.logout();
    }
    render (){

        let classesDoBotao = 'navbar-menu__botao';
        let classesDasOpcoes = 'navbar-menu__opcoes';
        if(this.state.aberto){
            classesDoBotao += ' navbar-menu__botao--aberto';
            classesDasOpcoes += ' navbar-menu__opcoes--aberto';
        }

        return (
            <nav className="navbar-menu">
                <a onClick={this.abreOuFechaMenu} className={classesDoBotao}>
                    Menu
                </a>
                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/quemsomos" activeClassName="navbar-menu__opcoes--ativo">
                            Quem somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/contato" activeClassName="navbar-menu__opcoes--ativo">
                            Contato
                        </NavLink>
                    </li>
                    {this.props.usuario ? (
                    <li>
                        <NavLink onClick={this.sair} to="/login" activeClassName="navbar-menu__opcoes--ativo">
                            Sair
                        </NavLink>
                    </li>
                    ) : (
                    <li>
                        <NavLink onClick={this.abreOuFechaMenu} to="/login" activeClassName="navbar-menu__opcoes--ativo">
                            Login
                        </NavLink>
                    </li>)}
                </ul>

            </nav>
        )
    }
}

export default Menu;