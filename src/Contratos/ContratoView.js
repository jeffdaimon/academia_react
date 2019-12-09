
import React from 'react';
import axios from 'axios';
import ContratoForm from './ContratoForm';
import ContratoTable from './ContratoTable';
import { Link } from 'react-router-dom';

export default class ContratoView extends React.Component {
    constructor() {
        super();
        this.state = {
            carregar: true,
            contratoParaEditar: null,
            show: false,
            trocaTela: "", trocatelaEsconder: true
        };
    }

    listarClientes() {
        axios.get("/api/clientes/").then(
            (retorno) => this.setState({
                clientes: retorno.data
            })
        );
    }

    listarPlanos() {
        axios.get("/api/planos/").then(
            (retorno) => this.setState({
                planos: retorno.data
            })
        );
    }

    listar() {
        axios.get("/api/contratos/").then(
            (retorno) => this.setState({
                carregar: false,
                contratos: retorno.data
            })
        );
    }
    apagar(contrato) {
        axios.delete(`/api/contratos/${contrato.id}`).then(
            () => this.listar()
        );
    }

    cadastrar(contrato) {
        axios.post("/api/contratos/", contrato).then(
            () => this.listar()
        );
    }

    atualizar(contrato) {
        axios.put("/api/contratos/" + contrato.id, contrato).then(
            () => this.listar()
        );
    }

    componentDidMount() {
        document.title = "Contratos"

        this.listar();
        this.listarClientes();
        this.listarPlanos();
    }

    editar(contrato) {
        this.setState({
            contratoParaEditar: contrato
        });
    }


    esconderForm() {
        this.setState({
            show: !this.state.show
        })
    }

    trocaTela() {
        this.setState({ trocaTela: "Voltar" })
        this.setState({ trocatelaEsconder: false })
    }
    render() {
        return <div >
            <Link className="btn btn-primary buttonVoltar" to="/">Voltar</Link>
            {this.state.trocatelaEsconder ? <div className="alinhamentoMeio container">
                <br />
                <h2>Lista de contratos</h2>
                <br />
                <br />
                {this.state.carregar ? "Carregando ..." :
                    <ContratoTable
                        itens={this.state.contratos}
                        onEditar={(contrato) => this.editar(contrato)}
                        onApagar={(contrato) => this.apagar(contrato)}
                    />}
                <br />
                <button className="btn btn-primary marginButton buttonForm" onClick={() => this.esconderForm()} variant="contained">
                    <strong> Abrir formulário de Cadastro </strong>
                </button>
                <br />
                {this.state.show ? <div><ContratoForm
                    key={this.state.contratoParaEditar ?
                        this.state.contratoParaEditar.id : "0"}
                    editar={this.state.contratoParaEditar}
                    clientes={this.state.clientes}
                    planos={this.state.planos}
                    onCadastrar={(contrato) => this.cadastrar(contrato)}
                    onAtualizar={(contrato) => this.atualizar(contrato)}
                    onCancelar={() => this.setState({ contratoParaEditar: null })}
                />
                </div> : ""}
                <br />
                <br />
            </div>

                : ""}
        </div>
    }
}

export { ContratoView }; 