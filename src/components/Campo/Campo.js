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
        const input = event.target;
        if(this.props.obrigatorio && input.value.trim() === ''){
           
            this.setState({erro:'Campo obrigatório'});
        } else if(this.props.minLength && input.value.trim().length < this.props.minLength){

            this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`});

        }else if(this.props.telefone && isNaN(input.value.trim())){
            this.setState({erro: 'Digite um número válido'});

        }else if(this.props.pattern && !this.props.pattern.test(input.value)){
            this.setState({erro: 'Digite um email válido'});

        }
        else if(input.value.trim()){
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