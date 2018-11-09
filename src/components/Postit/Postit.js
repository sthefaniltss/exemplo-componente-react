import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import { cadastraPostit } from '../../redux/actions';
import './Postit.css';

class Postit extends Component{
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    cadastraOuAltera = (event) => {
        event.preventDefault();
        const form = event.target;
        const dados = {
            id: `22021710-8a39-4135-9e41-16512d9a16d${Math.random(100)}`,
            titulo: form.titulo.value, 
            texto: form.texto.value
        };
        this.props.cadastraPostit(dados);
        form.reset();
    }
    
    render (){
        const cadastrando = !this.props.id;

        return (
            <form className="postit" onSubmit={this.cadastraOuAltera}>  
                <input className="postit__titulo" type="text" name="titulo" placeholder="Título" autoComplete="off" defaultValue={this.props.titulo}/>
                <textarea className="postit__texto" name="texto" placeholder="Digite o texto..." rows={5} autoComplete="off" defaultValue={this.props.texto} />
                <button className="postit__botao-concluir"> Concluído </button>
            </form>
        )
    }
}

export default connect(null, {cadastraPostit})(Postit);