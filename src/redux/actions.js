import axios from 'axios';

const configuracoes = {
    //aqui vai a url onde está a API
    baseURL: 'https://reprograma-postit-api.herokuapp.com'
    
}
const json = localStorage.getItem('usuario');

if(json){
    let usuario = JSON.parse(json);
    configuracoes.headers = {
        'Authorization': usuario.token
    }
}
const api = axios.create(configuracoes);

export function logaUsuario(dados){
    return (dispatch) => {
        api.post('/login', dados)
        .then(response =>{
            api.defaults.headers.common.Authorization = response.data.usuario.token;
            // para lembrar que para acessar um objeto também pode ser: api.defaults.headers.common['Authorization']
            //passa para a ação o usuario com os dados do backend que estão salvos
            dispatch({type: 'LOGA_USUARIO', dados: response.data.usuario})
        })
    }
}
export function deslogaUsuario(){
    return {type: 'DESLOGA_USUARIO'}
}
export function cadastraPostit(dados){
    return (dispatch) => {
        //aqui é chamada a api e a url para acessá-la, tbm é para passar como parâmetro as informações que queira enviar
        api.post('/postits', dados)
        //entao a api executa uma função logo após que recebe uma resposta
        .then(response =>{
            dados.id  = response.data.id;
            //data é a chave de dados da api
            dispatch({type: 'CADASTRA_POSTIT', dados});
        })
    }
}
export function alteraPostit(dados){
    return (dispatch) => {
        const url = `/postits/${dados.id}`
        api.put(url, dados)
        .then(() => {
            dispatch({type: 'ALTERA_POSTIT', dados});
        })
    }
}
export function removePostit(id){
    return (dispatch) => {
        const url = `/postits/${id}`
        api.delete(url)
        .then(() =>{
            dispatch({type: 'REMOVE_POSTIT', id})
        })
    }
}
