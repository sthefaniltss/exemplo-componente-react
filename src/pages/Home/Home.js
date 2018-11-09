import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Postit from '../../components/Postit/Postit';
import './Home.css';
import loading from './loading.svg'



class Home extends Component {
    
    constructor (props){
        super(props);
        this.state = {carregando: false}

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
                       <Postit />
                        <div>
                            {this.props.postits.map(postit => (
                                <Postit key={} titulo={postit.titulo} texto={postit.texto} />
                            ))}
                        </div>
                   </div>
               ) }
            </main>
        );
    }
}


export default connect((state) => ({ usuario: state.usuario, postits: state.postits }))(Home);