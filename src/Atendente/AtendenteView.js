
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AtendenteForm from './AtendenteForm';

export default class AtendenteView extends React.Component {
    constructor() {
        super();
        this.state = {
            carregar: true,
            show: false,
            trocaTela: "", trocatelaEsconder: true
        };
    }

    cadastrar(atendente) {
        axios.post("/api/atendentes/", atendente);
    }

    componentDidMount() {
        document.title = "Atendentes"
    }


    render() {
        return <div >
            <Link className="btn btn-primary buttonVoltar" to="/">Voltar</Link>
            <div className="alinhamentoMeio container">
                <br/>
                <div><AtendenteForm
                    onCadastrar={(cliente) => this.cadastrar(cliente)}
                    onClick={alert="Cadastrado com sucesso"}
                />
                </div>
                <br />
            </div>
        </div>
    }
}

export { AtendenteView }; 