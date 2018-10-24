import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const divisaoProjeto = document.getElementById("projeto");

function Link(props){
    return <a className="link" href={props.url}>{props.children}</a>
}
function Botao(props){
    let classes = "botao";
    if(props.desabilitado){
        classes += " botao--desabilitado";
    }
    return <input className={classes} type="submit" value={props.children}/>
}


const paginaLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Botao desabilitado>Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>   
    </main>
)

ReactDOM.render(paginaLogin, divisaoProjeto);
