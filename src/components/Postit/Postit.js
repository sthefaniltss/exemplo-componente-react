import React,  { Component }  from 'react';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions';
import './Postit.css';

class Postit extends Component{
    constructor (props) {
        super(props);
        this.state = { editando: false }
    }
    cadastraOuAltera = (event) => {
        event.preventDefault();
        const cadastrando = !this.props.id;
        const form = event.target;
        if(cadastrando){
            const dados = {
                titulo: form.titulo.value, 
                texto: form.texto.value
            };
            this.props.cadastraPostit(dados);
            form.reset();
        }else{
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value, 
                texto: form.texto.value
            };
            this.props.alteraPostit(dados);
            this.setState({editando: false});
        }

        }

    editaPostit = () => {
        this.setState({editando: true});
    }
    removePostit = (event) => {
        event.stopPropagation();
        this.props.removePostit(this.props.id);

    }

    
    render (){
        const cadastrando = !this.props.id;

        return (
            <form className="postit" onSubmit={this.cadastraOuAltera} onClick={this.editaPostit}>
                
                {(!cadastrando && this.state.editando) && (
                    <button type="button" className="postit__botao-remover" onClick={this.removePostit}><MdDelete/></button>
                )}
                <input className="postit__titulo" type="text" name="titulo" placeholder="Título" autoComplete="off" defaultValue={this.props.titulo}/>
                <textarea className="postit__texto" name="texto" placeholder="Digite o texto..." rows={5} autoComplete="off" defaultValue={this.props.texto} />
                { (cadastrando || this.state.editando) && (
                    <button className="postit__botao-concluir"> Concluído </button>
                )}
            </form>
        )
    }
}

export default connect(null, {cadastraPostit, alteraPostit, removePostit})(Postit);