const divisaoProjeto = document.getElementById("projeto");

const formulario = React.createElement("form", {children:[linkCriarUmaConta, linkFazerLogin]});

const linkCriarUmaConta = React.createElement("a", {className:"link", href:"/conta", children:"Criar uma conta"});

const linkFazerLogin = React.createElement("a", {className:"link", href:"/login", children:"Fazer login"});

ReactDOM.render(formulario, divisaoProjeto);
