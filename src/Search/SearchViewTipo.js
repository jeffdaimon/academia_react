import MenuView from '../Menu/MenuView';
import React from 'react';
import axios from 'axios';
import SearchFormMetodo from './SearchFormMetodo';
import SearchTable from './SearchTable';
import { Link } from 'react-router-dom';

export default class SearchViewTipo extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, trocaTela: "", trocatelaEsconder: true, show: false, showMetodo: false };
    }


    pesquisarTipo(cliente) {
        axios.post("/api/clientes/pesquisar/matricula", cliente).then(
            (retorno) => this.setState({
                carregar: false,
                clientes: retorno.data
            })
        );
    }

    trocaTela() {
        this.setState({ trocaTela: "Voltar" })
        this.setState({ trocatelaEsconder: false })
    }


    esconderForm() {
        this.setState({
            show: !this.state.show
        })
    }

    esconderFormCpf() {
        this.setState({
            showMetodo: !this.state.showMetodo
        })
    }


    componentDidMount() {
        document.title = "Pesquisar matricula do cliente"
        this.pesquisarTipo();
    }

    render() {
        return <div>
            <Link className="btn btn-primary buttonVoltar" to="/">Voltar</Link>
            {this.state.trocatelaEsconder ?
                <div className="container alinhamentoMeio">
                    <br />
                    <SearchFormMetodo onPesquisar={(matricula) => this.pesquisarTipo(matricula)} />
                    <br />

                    {this.state.carregar ? "" :
                        <SearchTable
                            itens={this.state.clientes}
                        />}
                    <br />
                </div> : ""}
        </div>
    }
}


export { SearchViewTipo }; 