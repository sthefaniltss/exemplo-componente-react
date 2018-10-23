const divisaoProjeto = document.getElementById("projeto");

const formulario = document.createElement("form");

const linkCriarUmaConta = document.createElement("a");
linkCriarUmaConta.className = "link";
linkCriarUmaConta.href = "/conta";
linkCriarUmaConta.textContent = "Criar uma conta";


const linkFazerLogin = document.createElement("a");
linkFazerLogin.className = "link";
linkFazerLogin.href = "/login";
linkFazerLogin.textContent = "Fazer Login";

formulario.appendChild(linkCriarUmaConta);
formulario.appendChild(linkFazerLogin);
divisaoProjeto.appendChild(formulario);
