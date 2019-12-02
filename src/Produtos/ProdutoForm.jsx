
import React from 'react';

export default class ProdutoForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                nome: this.props.editar.nome,
                tipo: this.props.editar.tipo,
                valor: this.props.editar.valor,
                estoque: this.props.editar.estoque
            }

        } else {
            this.state = {
                nome: "",
                tipo: "",
                valor: "",
                estoque: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                nome: "",
                tipo: "",
                valor: "",
                estoque: ""
            });
        }
    }

    confirmar() {

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                nome: this.state.nome,
                tipo: this.state.tipo,
                valor: this.state.valor,
                estoque: this.state.estoque
            });
        } else {
            this.props.onCadastrar({
                nome: this.state.nome,
                tipo: this.state.tipo,
                valor: this.state.valor,
                estoque: this.state.estoque
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <br></br>
            <br></br>
            <h2>Cadastro de produtos ou itens</h2>
            <label className="marginButton">Nome</label>
            <input type="text" className="form-control w-25"
                value={this.state.nome}
                onChange={(nome) => this.setState({
                    nome: nome.target.value
                })}
            />
            <br/><br/>
            <label className="marginButton">Tipo</label><input className="form-control w-25"
                value={this.state.tipo}
                onChange={(tipo) => this.setState({
                    tipo: tipo.target.value
                })}
            />
            <br /><br />
            
            <label className="marginButton">Valor</label><input className="form-control w-25"
                value={this.state.valor}
                onChange={(valor) => this.setState({
                    valor: valor.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">Estoque</label><input className="form-control w-25"
                value={this.state.estoque}
                onChange={(estoque) => this.setState({
                    estoque: estoque.target.value
                })}
            />
            <br /><br />
            <button className="btn btn-primary"
                disabled={this.state.valor < 0}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>
            <button className="btn btn-primary marginButton"
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </div>
    }
}

export { ProdutoForm }; 