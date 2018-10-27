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
        <Campo id="email" name="email" type="email" placeholder="Email" minLength={10}></Campo>
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo id="senha" name="senha" type="password" placeholder="Senha" minLength={6}></Campo>
        <Botao desabilitado>Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>
        </main>
    );
}

export default Login;