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
           
            this.setState({erro:'Campo obrigatório'});
        } else if(this.props.minLength && alvo.value.trim().length < this.props.minLength){

            this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`});

        }else if(this.props.telefone && isNaN(alvo.value.trim())){
            this.setState({erro: 'Digite um número válido'});

        }
        else if(alvo.value.trim()){
            this.setState({erro: ''});
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