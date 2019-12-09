
import React from 'react';

export default class AtendenteForm extends React.Component {

    constructor(props) {
            super(props);
                this.state = {
                    nome: "",
                    login: "",
                    password: "",
                    newPassword: ""
                }
            
        }

        limpar() {
                this.setState({
                    nome: "",
                    login: "",
                    password: "",
                    newPassword: ""
                });
            
        }
    
        confirmar() {
    
                this.props.onCadastrar({
                    nome: this.state.nome,
                    login: this.state.login,
                    password: this.state.password, 
                    newPassword: this.state.newPassword
                });
            this.limpar();
        }

    render() {
        return <div>
            <br/>
            <br/>
            <h2>Cadastro de atendentes</h2>
            <br />
            <label className="marginButton">Nome</label><input className="form-control w-25"
                value={this.state.nome}
                onChange={(nome) => this.setState({
                    nome: nome.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">Login</label><input className="form-control w-25"
                value={this.state.login}
                onChange={(login) => this.setState({
                    login: login.target.value
                })}
            />
            <br /><br />
            <label className="marginButton">Senha</label><input className="form-control w-25"
            type="password"
                value={this.state.password}
                onChange={(password) => this.setState({
                    password: password.target.value
                })}
            />
             <br /><br />
            <label className="marginButton">Confirme a senha</label><input className="form-control w-25"
            type="password"
                value={this.state.newPassword}
                onChange={(newPassword) => this.setState({
                    newPassword: newPassword.target.value
                })}
            />
            
             <br /><br />
             <p className="alinhamentoDireita">* Todos os campos obrigatórios</p>
            <br /><br />
            <button className="btn btn-primary"
                disabled={this.state.nome == null || this.state.nome == ""}
                disabled={this.state.login== null || this.state.login == ""}
                disabled={this.state.password== null || this.state.password == ""}
                disabled={this.state.newPassword== null || this.state.newPassword == ""}
                onClick={() => this.confirmar()}
            >Cadastrar</button>
            <button className="btn btn-primary marginButton"
                onClick={() => this.limpar()}
            >Limpar</button>
        </div>
    }
}

export { AtendenteForm }; 