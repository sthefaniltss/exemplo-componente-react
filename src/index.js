import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Login from './pages/Login/Login';
import Conta from './pages/Conta/Conta';

const divisaoProjeto = document.getElementById("projeto");

ReactDOM.render(<Conta/>, divisaoProjeto);
