import React, { Component } from 'react';
import Link from '../../components/Links/Link';
import Botao from '../../components/Botao/Botao';
import Legenda from '../../components/Legenda/Legenda';
import Campo from '../../components/Campo/Campo';
import './Login.css'


class Login extends Component {
    
    constructor (props){
        super(props);
        this.emailRef = React.createRef();
        this.senhaRef = React.createRef();
        this.state ={
            desabilitado: true
        }

    }
    handleChange = () => {
        const inputEmail = this.emailRef.current;
        const inputSenha = this.senhaRef.current;

        if(inputEmail.temErro() || inputSenha.temErro()) {
            this.setState( {desabilitado: true});
            
        }else{
            this.setState( {desabilitado: false});
        }
    }
    enviaDados = (event) => {
        event.preventDefault();
        const inputEmail = this.emailRef.current;
        const inputSenha = this.senhaRef.current;
        const dados = {
            email: inputEmail.pegaValor(),
            senha: inputSenha.pegaValor()
        }
        this.props.onEnviar(dados);
        this.props.historico.push('/');
    }

    render (){

        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu e-mail e senha.</p>
                <form onSubmit={this.enviaDados}>
                    <Legenda htmlFor="email">Email:</Legenda>
                    <Campo ref={this.emailRef} id="email" name="email" type="email" placeholder="Email" required onChange={this.handleChange} ></Campo>
                    <Legenda htmlFor="senha">Senha:</Legenda>
                    <Campo ref={this.senhaRef} id="senha" name="senha" type="password" placeholder="Senha" required minLength={6} onChange={this.handleChange} ></Campo>
                    <Botao desabilitado={this.state.desabilitado} >Enviar</Botao>
                </form>
                <Link url="/conta">Criar uma conta</Link>
            </main>
        );
    }
}

export default Login;