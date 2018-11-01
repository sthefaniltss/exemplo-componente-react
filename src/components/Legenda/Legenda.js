import React,  { Component }  from 'react';
import './Legenda.css';

class Legenda extends Component{
    constructor (props) {
        super(props);

    }
    render (){
        return <label className="legenda" htmlFor={this.props.htmlFor}>{this.props.children}</label>
    }
}

export default Legenda;