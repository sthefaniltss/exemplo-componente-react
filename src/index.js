import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/Login/Login';
import Conta from './pages/Conta/Conta';


function App (){
    return (
        <div className="app">
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/login" component={Login}/>
        </Switch>
        </div>

    )
}

ReactDOM.render(<BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("projeto"))
