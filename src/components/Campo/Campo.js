import React from 'react';
import './Campo.css';

class Campo extends React.Component {
    
    constructor (props){
        super(props);
        this.state ={
            erro:'',
        }
    }
    validar = (event) => {
        const alvo = event.target;
        if(this.props.obrigatorio && alvo.value.trim() === ''){
            const state = {
                erro:'Campo obrigatório'
            }
        
            this.setState(state);
        } else if(this.props.email && alvo.value.trim().length < 10){
            const state = {
                erro: 'Digite pelo menos 10 caracteres'
            }
            this.setState(state);

        }else if(this.props.senha && alvo.value.trim().length < 6){
            const state = {
                erro: 'Digite pelo menos 6 caracteres'
            }
            this.setState(state);
        }else if(isNaN(this.props.telefone && alvo.value.trim())){
            const state = {
                erro: 'Digite um número válido'
            }
            this.setState(state);
        }
        else if(alvo.value.trim()){
            const state = {
                erro:''
            }
            this.setState(state);
        }
    }

    render(){
        
        return (
                <div>
                    <input 
                        className="caixa-texto" 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder}
                        onChange={this.validar}
                    />
                    <p className="grupo__erro">
                        {this.state.erro}
                    </p>

                    
                </div>
                
                
                )
    }
    
    
}

export default Campo;