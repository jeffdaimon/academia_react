import React from 'react';
import MenuView from './Menu/MenuView';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClienteView from './Clientes/ClienteView';
import ContratoView from './Contratos/ContratoView';
import SearchView from './Search/SearchView';
import SearchViewTipo from './Search/SearchViewTipo';
import PlanoView from './Planos/PlanoView';
import AtendenteView from './Atendente/AtendenteView';
import axios from 'axios';
import Login from './Login/Login';



export default class App extends React.Component{
  constructor() {
    super();
    this.state={logado:false};
  }

    async componentDidMount() {
      const token= localStorage.getItem("token");
      if(token) {
        const retorno = await axios.get("/api/atendentes/token/?token="+token);
        if(retorno.data) {
        axios.defaults.headers.common['token']=token;
        this.setState({
          logado:true,
          atendente:retorno.data
        });
      }
    }
  
    }

    login(atendente, token) {
      axios.defaults.headers.common['token']=token;
      localStorage.setItem("token",token);
      this.setState({
        logado:true,
        atendente:atendente
      });
    }

    render() {
      return <div>
        <Router>
          <div>
          {this.state.logado?<div>
            <Route exact path="/" component={MenuView} />
            <Route path="/atendentes" component={AtendenteView} />
            <Route path="/clientes" component={ClienteView} />
            <Route path="/contratos" component={ContratoView} />
            <Route path="/planos" component={PlanoView} />
            <Route path="/pesquisaNome" component={SearchView} />
            <Route path="/pesquisaMatricula" component={SearchViewTipo} />
          </div>: <Login onLogin={(atendente, token)=>this.login(atendente, token)}/> }
          </div>
          </Router>
        </div>
    
    

  }



}
