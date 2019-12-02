
import MenuView from '../Menu/MenuView';
import React from 'react';
import SearchForm from './SearchForm';
import axios from 'axios';
import SearchTableClient from './SearchTableClient';
import { Link } from 'react-router-dom';

export default class SearchView extends React.Component {
    constructor() {
        super();
        this.state = { carregar: true, trocaTela: "", trocatelaEsconder: true, show: false, showMetodo: false };
    }


    pesquisarNome(cliente) {
        axios.post("/api/clientes/pesquisar/nome", cliente).then(
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
        document.title = "Pesquisar nome do cliente"
        this.pesquisarNome();
    }

    render() {
        return <div >
            <Link className="btn btn-primary buttonVoltar" to="/">Voltar</Link>
            {this.state.trocatelaEsconder ?
                <div className="container alinhamentoMeio"><br></br>
                    <SearchForm onPesquisar={(nome) => this.pesquisarNome(nome)} />
                    <br></br>
                    {this.state.carregar ? "" :
                        <SearchTableClient
                            itens={this.state.clientes}
                        />}
                    <br />
                    <br />
                </div> : ""}
        </div>
    }
}


export { SearchView }; 