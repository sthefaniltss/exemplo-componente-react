import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';



class Home extends Component {
    
    constructor (props){
        super(props);
        this.state ={}

    }
    

    render (){
        if(!this.props.usuario){
            return <Redirect to="/login"/>
        }

        return (
            <main className="home">
               
            </main>
        );
    }
}
function passaDadosDoEstadoParaMeuComponente(state){
    return {
        usuario: state.usuario
    }
}

const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente);

const HomeConectada = conectaNaStore(Home);

export default HomeConectada;