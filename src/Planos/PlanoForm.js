
import React from 'react';

export default class PlanoForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                plano: this.props.editar.plano,
                valor: this.props.editar.valor
            }

        } else {
            this.state = {
                plano: "",
                valor: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                plano: "",
                valor: ""
            });
        }
    }

    confirmar() {

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                plano: this.state.plano,
                valor: this.state.valor
            });
        } else {
            this.props.onCadastrar({
                plano: this.state.plano,
                valor: this.state.valor
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <br />
            <br />
            <h2>Cadastro de planos</h2>
            <br />
            <label className="marginButton">Plano : *</label><input className="form-control w-25" placeholder="Ex: Premium com treinador"
                value={this.state.plano}
                onChange={(plano) => this.setState({
                    plano: plano.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">Valor : * </label>
            <input placeholder="Ex: R$ 10,00" type="number" className="form-control w-25"
                value={this.state.valor}
                onChange={(event) => this.setState({
                    valor: event.target.value
                })}
            />
            <br />
            
            <br /><br />
            <p className="alinhamentoDireita">* Todos os campos obrigatórios</p>
            <br /><br />
            <button className="btn btn-primary"
                disabled={this.state.plano == null || this.state.plano == ""}
                disabled={this.state.valor <= 0}
                onClick={() => this.confirmar()}
            >{this.props.editar ? "Confirmar" : "Cadastrar"}</button>
            <button className="btn btn-primary marginButton"
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </div>
    }
}

export { PlanoForm }; 