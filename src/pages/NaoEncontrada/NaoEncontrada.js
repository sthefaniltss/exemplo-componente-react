import React, { Component } from 'react';
import './NaoEncontrada.css';
import error404 from './error.jpeg'


class NaoEncontrada extends Component {
    
    constructor (props){
        super(props);
        this.state ={}

    }

    render (){

        return (
            <main className="nao-encontrada">
                <h1>Página não encontrada</h1>
                <p className="nao-encontrada__simbolo">
                    :-(
                </p>
                <img className="error" src={error404} alt="Homem confuso"/>
            </main>
        );
    }
}

export default NaoEncontrada;
