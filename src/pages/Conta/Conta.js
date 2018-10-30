import React from 'react';
import Link from '../../components/Links/Link';
import Botao from '../../components/Botao/Botao';
import Legenda from '../../components/Legenda/Legenda';
import Campo from '../../components/Campo/Campo';

import './Conta.css'


 function Conta () {
    return (
        <main className="conta">
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta.</p>
        <Legenda htmlFor="nome">Nome:</Legenda>
        <Campo id="nome" name="nome" type="text" placeholder="Nome" required></Campo>

        <Legenda htmlFor="telefone">Telefone:</Legenda>
        <Campo id="telefone" name="telefone" type="tel" placeholder="Telefone" telefone></Campo>

        <Legenda htmlFor="email">Email:</Legenda>
        <Campo id="email" name="email" type="email" placeholder="Email" required ></Campo>

        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo id="senha" name="senha" type="password" placeholder="Senha" required minLength={6}></Campo>

        <Botao disabled>Enviar</Botao>
        <Link url="/login">Fazer Login</Link>
        </main>
    );
}

export default Conta;