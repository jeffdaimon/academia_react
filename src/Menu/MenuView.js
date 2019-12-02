
import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const alinhamento = { textAlign: 'center', backgroundColor: '#d3d3d3' }
const alinhamentoVertical = { verticalAlign: 'bottom' }


export default class MenuView extends React.Component {

        constructor() {
                super();
                this.state = {
                        show: true
                };
        }


        hidingMenuToCliente() {
                this.setState({ show: false })
                this.setState({ itemMenu: "clientes" })
        }
        hidingMenuToSearch() {
                this.setState({ show: false })
                this.setState({ itemMenu: "search" })
        }
        hidingMenuToSearchTipo() {
                this.setState({ show: false })
                this.setState({ itemMenu: "searchTipo" })
        }
        hidingMenuToContrato() {
                this.setState({ show: false })
                this.setState({ itemMenu: "contratos" })
        }
        hidingMenuToPlano() {
                this.setState({ show: false })
                this.setState({ itemMenu: "planos" })
        }

        hidingMenuToAtendente() {
                this.setState({ show: false })
                this.setState({ itemMenu: "atendentes" })
        }



        componentDidMount() {
                document.title = "Malhação Suprema"
        }

        render() {
                return <div>
                        {this.state.show ? <Link className="btn btn-primary buttonVoltar" onClick={() => this.hidingMenuToAtendente()} to="/atendentes">Cadastrar novo atendente</Link> : ""}
                        <div className="alinhamentoMeio container">
                                <br />
                                <h1>Academia do bodybuilder</h1>
                                <img className="logo" src={logo} />
                                <p className="alinhamentoDireita">Sistema em desenvolvimento</p>
                                <br></br>
                                {this.state.show ? <Link className="btn btn-secondary marginButton" onClick={() => this.hidingMenuToCliente()} to="/clientes">Clientes</Link> : ""}
                                {this.state.show ? <Link className="btn btn-secondary marginButton" onClick={() => this.hidingMenuToContrato()} to="/contratos">Contratos</Link> : ""}
                                {this.state.show ? <Link className="btn btn-secondary marginButton" onClick={() => this.hidingMenuToPlano()} to="/planos">Planos</Link> : ""}
                                {this.state.show ? <Link className="btn btn-secondary marginButton" onClick={() => this.hidingMenuToSearch()} to="/pesquisaNome">Pesquisar por nome</Link> : ""}
                                {this.state.show ? <Link className="btn btn-secondary marginButton" onClick={() => this.hidingMenuToSearchTipo()} to="/pesquisaMatricula">Pesquisar por matricula</Link> : ""}
                                <br></br>
                        </div>
                </div>
        }
}

export { MenuView }; 
