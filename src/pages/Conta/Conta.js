import React, { Component } from 'react';
import Link from '../../components/Links/Link';
import Botao from '../../components/Botao/Botao';
import Legenda from '../../components/Legenda/Legenda';
import Campo from '../../components/Campo/Campo';

import './Conta.css'

class Conta extends Component {
    
    constructor (props){
        super(props);
        this.emailRef = React.createRef();
        this.senhaRef = React.createRef();
        this.nomeRef = React.createRef();
        this.state ={
            desabilitado: true
        }

    }
    handleChange = () => {
        const inputEmail = this.emailRef.current;
        const inputSenha = this.senhaRef.current;
        const inputNome = this.nomeRef.current;

        if(inputEmail.temErro() || inputSenha.temErro() || inputNome.temErro())  {
            this.setState( {desabilitado: true});
            
        }else{
            this.setState( {desabilitado: false});

        }


    }

    render (){
    return (
        <main className="conta">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta.</p>
        <Legenda htmlFor="nome">Nome:</Legenda>
        <Campo  ref={this.nomeRef} id="nome" name="nome" type="text" placeholder="Nome" required onChange={this.handleChange}></Campo>

        <Legenda htmlFor="telefone">Telefone:</Legenda>
        <Campo id="telefone" name="telefone" type="tel" placeholder="Telefone" telefone></Campo>

        <Legenda htmlFor="email">Email:</Legenda>
        <Campo ref={this.emailRef} id="email" name="email" type="email" placeholder="Email" required onChange={this.handleChange} ></Campo>

        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo  ref={this.senhaRef} id="senha" name="senha" type="password" placeholder="Senha" required minLength={6} onChange={this.handleChange}></Campo>

        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
        <Link url="/login">Fazer Login</Link>
        </main>
    );
}
}

export default Conta;