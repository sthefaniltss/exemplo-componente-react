const divisaoProjeto = document.getElementById("projeto");

function Link(props){
    return <a className="link" href={props.url}>{props.children}</a>
}
function Botao(props){
    return <input className={props.className} type="submit" value={props.children}/>
}


const paginaLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Botao className="botao">Enviar</Botao>
        <Link url="/conta">Criar uma conta</Link>   
    </main>
)

ReactDOM.render(paginaLogin, divisaoProjeto);
