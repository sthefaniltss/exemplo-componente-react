import React,  { Component }  from 'react';
import './Menu.css';

class Menu extends Component{
    constructor (props) {
        super(props);
        this.state = {
            aberto: false
        }
    }
    render (){
        return (
            <nav className="navbar-menu">
                <a className="navbar-menu__botao">
                    Menu
                </a>
                <ul className="navbar-menu__opcoes">
                    <li>
                        <a href="/quemsomos">
                            Quem somos
                        </a>
                    </li>
                    <li>
                        <a href="/contato">
                            Contato
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            Sair
                        </a>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Menu;