import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import './index.css';
import Login from './pages/Login/Login';
import Conta from './pages/Conta/Conta';
import Contato from './pages/Contato/Contato';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';



function App (props){
    const usuario = props.usuario;
    const logaUsuario = props.logaUsuario;
    const deslogaUsuario = props.deslogaUsuario;
    return (
        <div className="app">
        <Navbar/>
        <Switch>
            <Route path="/" exact render={() => {
                return usuario ? <Home /> : <Redirect to="/login" />
            }}/>
            <Route path="/login" render={(props) => { 
                return <Login historico={props.history} onEnviar={logaUsuario}/>
            }}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/quemsomos" component={QuemSomos}/>
            <Route component={NaoEncontrada}/>
        </Switch>
        </div>

    )
}

function passaDadosDoEstadoParaMeuComponente(state){
    const props = {
        usuario: state.usuario
    }
    return props;
}
function passaFuncoesQueDisparamAcoesViaProps(dispatch){
    const props = {
        logaUsuario: (dados)=>{
            dispatch({type: 'LOGA_USUARIO', dados: dados})
        },
        deslogaUsuario: ()=>{
            dispatch({type: 'DESLOGA_USUARIO'})
        }
    }
    return props;
}
const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente,
    passaFuncoesQueDisparamAcoesViaProps
);

const AppConectada = withRouter(conectaNaStore(App));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppConectada/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("projeto"))
