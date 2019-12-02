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

function App() {
  return <div>
    <Router>
      <div>
        <Route exact path="/" component={MenuView} />
        <Route path="/atendentes" component={AtendenteView} />
        <Route path="/clientes" component={ClienteView} />
        <Route path="/contratos" component={ContratoView} />
        <Route path="/planos" component={PlanoView} />
        <Route path="/pesquisaNome" component={SearchView} />
        <Route path="/pesquisaMatricula" component={SearchViewTipo} />
      </div>
      </Router>
    </div>
}

export default App;
