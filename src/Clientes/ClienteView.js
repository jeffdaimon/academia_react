
import React from 'react';
import axios from 'axios';
import ClienteForm from './ClienteForm';
import ClienteTable from './ClienteTable';
import { Link } from 'react-router-dom';

export default class ClienteView extends React.Component {
    constructor() {
        super();
        this.state = {
            carregar: true,
            clienteParaEditar: null,
            show: false,
            trocaTela: "", trocatelaEsconder: true
        };
    }

    listar() {
        axios.get("/api/clientes/").then(
            (retorno) => this.setState({
                carregar: false,
                clientes: retorno.data
            })
        );
    }
    apagar(cliente) {
        axios.delete(`/api/clientes/${cliente.id}`).then(
            () => this.listar()
        );
    }

    cadastrar(cliente) {
        axios.post("/api/clientes/", cliente).then(
            () => this.listar()
        );
    }

    atualizar(cliente) {
        axios.put("/api/clientes/" + cliente.id, cliente).then(
            () => this.listar()
        );
    }

    componentDidMount() {
        document.title = "Clientes"

        this.listar();
    }

    editar(cliente) {
        this.setState({
            clienteParaEditar: cliente
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
                <br/>
                <h2>Lista de clientes</h2>
                <br />
                <br />
                {this.state.carregar ? "Carregando ..." :
                    <ClienteTable
                        itens={this.state.clientes}
                        onEditar={(cliente) => this.editar(cliente)}
                        onApagar={(cliente) => this.apagar(cliente)}
                    />}
                <br />
                <button className="btn btn-primary marginButton buttonForm" onClick={() => this.esconderForm()} variant="contained">
                    <strong> Abrir formulário de Cadastro </strong>
                </button>
                <br />
                {this.state.show ? <div><ClienteForm
                    key={this.state.clienteParaEditar ?
                        this.state.clienteParaEditar.id : "0"}
                    editar={this.state.clienteParaEditar}
                    onCadastrar={(cliente) => this.cadastrar(cliente)}
                    onAtualizar={(cliente) => this.atualizar(cliente)}
                    onCancelar={() => this.setState({ clienteParaEditar: null })}
                />
                </div> : ""}
                <br />
                <br />
            </div>

                : ""}
        </div>
    }
}

export { ClienteView }; 