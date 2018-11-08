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


export default connect((state) => ({ usuario: state.usuario }))(Home);