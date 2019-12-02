
import React from 'react';

export default class ContratoForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                meioPagamento: this.props.editar.meioPagamento,
                tempoContrato: this.props.editar.tempoContrato,
                clienteId: this.props.editar.cliente ? this.props.editar.cliente.id : "",
                planoId: this.props.editar.plano ? this.props.editar.plano.id : ""
            }

        } else {
            this.state = {
                meioPagamento: "",
                tempoContrato: "",
                clienteId: "",
                planoId: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                meioPagamento: "",
                tempoContrato: "",
                clienteId: "",
                planoId: ""
            });
        }
    }

    confirmar() {

        let cliente = this.props.clientes.find(
            (cliente) => cliente.id == this.state.clienteId

        );

        let plano = this.props.planos.find(
            (plano) => plano.id == this.state.planoId

        );

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                meioPagamento: this.state.meioPagamento,
                tempoContrato: this.state.tempoContrato,
                cliente: cliente,
                plano: plano
            });
        } else {
            this.props.onCadastrar({
                meioPagamento: this.state.meioPagamento,
                tempoContrato: this.state.tempoContrato,
                cliente: cliente,
                plano: plano
            });
        }
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
             <br/>
             <br/>
            <h2>Cadastro de contratos</h2>
            <br />
            <label className="marginButton labelContrato">Meio de pagamento:</label>
            <br/>
            <input className="form-control w-25" placeholder="Exemplo: Dinheiro"
            value={this.state.meioPagamento}
                onChange={(formadePagamento) => this.setState({
                    meioPagamento: formadePagamento.target.value
                })}
            />
            <br /><br />
            <label className="marginButton labelContrato">Tempo de contrato:</label>
            <br/>
            <input className="form-control w-25" placeholder="Exemplo: 1 mês"
                value={this.state.tempoContrato}
                onChange={(tempoContrato) => this.setState({
                    tempoContrato: tempoContrato.target.value
                })}
            />
            <br /><br />
            <label className="marginButton labelContrato">Selecione um cliente:</label>
            <br/>
            <select className="form-control w-25" value={this.state.clienteId} 
            onChange={ (clientes) => this.setState({ clienteId: clientes.target.value
                    })
                }>
                <option value="">Escolha</option>
                {this.props.clientes && this.props.clientes.map(
                        (cliente) => <option value={cliente.id}>{cliente.nome}</option>
                    )}
            </select>
            <br/><br/>
            <label className="marginButton labelContrato">Selecione um plano:</label>
            <br/>
            <select className="form-control w-25" value={this.state.planoId}
                onChange={(plano) => this.setState({ planoId: plano.target.value
                    })
                }>
                <option value="">Escolha</option>
                {this.props.planos && this.props.planos.map(
                    (plano) => <option value={plano.id}>{plano.plano}</option>
                    )}
            </select>

            <br></br>

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

export { ContratoForm }; 