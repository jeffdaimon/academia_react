
import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);{
            this.state = {
                nome: ""
            }
        }
    }

    limpar() {
        this.setState({
            nome: ""
        });
    }
    

    pesquisarNome() {
        this.props.onPesquisar({
            nome: this.state.nome
        });
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Digite um nome para pesquisa: </h2>
            <br/>
            <input className="form-control w-25" placeholder="Exemplo: Maria" value={this.state.nome}
                onChange={(nomePesquisa) => this.setState({
                    nome: nomePesquisa.target.value
                })}
            />
            <br /><br />
            <button className="btn btn-primary marginButton" onClick={() => this.pesquisarNome()} >Confirmar</button>
            <button className="btn btn-primary marginButton" onClick={() => this.limpar()} >Limpar</button>
        </div>
        
    }
}