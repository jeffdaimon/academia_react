
import React from 'react';

export default class ClienteForm extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.editar) {
            this.state = {
                matricula: this.props.editar.matricula,
                nome: this.props.editar.nome,
                endereco: this.props.editar.endereco,
                telefone: this.props.editar.telefone,
                cpf: this.props.editar.cpf
            }

        } else {
            this.state = {
                matricula: "",
                nome: "",
                endereco: "",
                telefone: "",
                cpf: ""
            }
        }
    }

    limpar() {
        if (this.props.editar) {
            this.props.onCancelar();
        } else {
            this.setState({
                matricula: "",
                nome: "",
                endereco: "",
                telefone: "",
                cpf: ""
            });
        }
    }

    confirmar() {

        if (this.props.editar) {
            this.props.onAtualizar({
                id: this.props.editar.id,
                matricula: this.state.matricula,
                nome: this.state.nome,
                endereco: this.state.endereco,
                telefone: this.state.telefone,
                cpf: this.state.cpf
            });
        } else {
            this.props.onCadastrar({
                matricula: this.state.matricula,
                nome: this.state.nome,
                endereco: this.state.endereco,
                telefone: this.state.telefone,
                cpf: this.state.cpf
            });
        }
        this.limpar();
    }

    render() {
        return <div>
            <br></br>
            <br></br>
            <h2>Cadastro de clientes</h2>
            <br />
            <label className="marginButton">Matricula</label><input className="form-control w-25"
                value={this.state.matricula}
                onChange={(matricula) => this.setState({
                    matricula: matricula.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">Nome</label>
            <input type="text" className="form-control w-25"
                value={this.state.nome}
                onChange={(nome) => this.setState({
                    nome: nome.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">CPF</label><input className="form-control w-25"
                value={this.state.cpf}
                onChange={(cpf) => this.setState({
                    cpf: cpf.target.value
                })}
            />
            <br /><br />

            <label className="marginButton">Endereço</label><input className="form-control w-25"
                value={this.state.endereco}
                onChange={(endereco) => this.setState({
                    endereco: endereco.target.value
                })}
            />
            <br /><br />

            <label className="marginButton">Telefone</label><input className="form-control w-25"
                value={this.state.telefone}
                onChange={(telefone) => this.setState({
                    telefone: telefone.target.value
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

export { ClienteForm }; 