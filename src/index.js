import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import Login from './pages/Login/Login';
import Conta from './pages/Conta/Conta';
import Contato from './pages/Contato/Contato';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import NaoEncontrada from './pages/NaoEncontrada/NaoEncontrada';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';



function App (){
    return (
        <div className="app">
        <Navbar/>
        <Switch>
            <Route path="/" exact component={Home} />
            }}/>
            <Route path="/login" component={Login}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/quemsomos" component={QuemSomos}/>
            <Route component={NaoEncontrada}/>
        </Switch>
        </div>

    )
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("projeto"))
