import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';
import Login from './pages/Login/Login';
import Conta from './pages/Conta/Conta';
import Contato from './pages/Contato/Contato';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';


let usuario = JSON.parse(localStorage.getItem('usuario'));

function logaUsuario (dados) {
    const json = JSON.stringify(dados);
    localStorage.setItem('usuario', json )
    usuario = dados;

}
function App (){
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

ReactDOM.render(<BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("projeto"))
