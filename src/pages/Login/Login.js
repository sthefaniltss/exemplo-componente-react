import React from 'react';
import Link from '../../components/Links/Link';
import Botao from '../../components/Botao/Botao';
import Legenda from '../../components/Legenda/Legenda';
import Campo from '../../components/Campo/Campo';

import './Login.css'


 function Login () {
    return (
        <main className="login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Legenda htmlFor="email">Email:</Legenda>
        <Campo id="email" name="email" type="email" placeholder="Email" required pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}></Campo>
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo id="senha" name="senha" type="password" placeholder="Senha" required minLength={6}></Campo>
        <Botao desabilitado>Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>
        </main>
    );
}

export default Login;