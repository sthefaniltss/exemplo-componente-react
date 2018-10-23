const divisaoProjeto = document.getElementById("projeto");


const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>

const linkFazerLogin = <a class="link" href="/login">Fazer login</a>

const formulario = (
    <form>
        {[linkCriarUmaConta, linkFazerLogin]}
    </form>
)


ReactDOM.render(formulario, divisaoProjeto);
