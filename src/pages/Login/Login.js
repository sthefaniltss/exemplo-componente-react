import React from 'react';
import Link from '../../components/Links/Link';
import Botao from '../../components/Botao/Botao';
import './Login.css'


 function Login () {
    return (
        <main className="login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Botao desabilitado>Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>
        </main>
    );
}

export default Login;