
import React from 'react';
import axios from 'axios';
import PlanoForm from './PlanoForm';
import PlanoTable from './PlanoTable';
import { Link } from 'react-router-dom';

export default class PlanoView extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, internetParaEditar: null, show: false, trocaTela: "", trocatelaEsconder: true };
    }

    listar() {
        axios.get("/api/planos/").then(
            (retorno) => this.setState({
                carregar: false,
                planos: retorno.data
            })
        );
    }
    apagar(plano) {
        axios.delete(`/api/planos/${plano.id}`).then(
            () => this.listar()
        );
    }

    cadastrar(plano) {
        axios.post("/api/planos/", plano).then(
            () => this.listar()
        );
    }

    atualizar(plano) {
        axios.put("/api/planos/" + plano.id, plano).then(
            () => this.listar()
        );
    }

    componentDidMount() {
        document.title = "Planos de academia"

        this.listar();
    }

    editar(plano) {
        this.setState({
            planoParaEditar: plano
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
                <h2>Lista de planos</h2>
                <br />
                <br />
                {this.state.carregar ? "Carregando ..." :
                    <PlanoTable
                        itens={this.state.planos}
                        onEditar={(plano) => this.editar(plano)}
                        onApagar={(plano) => this.apagar(plano)}
                    />}
                <br />
                <button className="btn btn-primary marginButton buttonForm" onClick={() => this.esconderForm()} variant="contained">
                    <strong> Abrir formulário de Cadastro </strong>
                </button>
                <br />
                {this.state.show ? <div><PlanoForm
                    key={this.state.planoParaEditar ?
                        this.state.planoParaEditar.id : "0"}
                    editar={this.state.planoParaEditar}
                    onCadastrar={(plano) => this.cadastrar(plano)}
                    onAtualizar={(plano) => this.atualizar(plano)}
                    onCancelar={() => this.setState({ planoParaEditar: null })}
                /></div> : ""}
                <br />

            </div> : ""}
        </div>
    }
}
