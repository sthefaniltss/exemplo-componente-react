import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';
import loading from './loading.svg'



class Home extends Component {
    
    constructor (props){
        super(props);
        this.state = {carregando: true}

    }
    

    render (){
        if(!this.props.usuario){
            return <Redirect to="/login"/>
        }

        return (
            <main className="home">
               {this.state.carregando ? (
                   <img className="home__loading" src={loading} alt="Carregando" />
               ) : (
                   <div>
                       Aqui listarei os postits
                   </div>
               ) }
            </main>
        );
    }
}


export default connect((state) => ({ usuario: state.usuario }))(Home);