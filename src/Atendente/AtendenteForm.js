
import React from 'react';

export default class AtendenteForm extends React.Component {

    constructor(props) {
            super(props);
                this.state = {
                    nome: "",
                    login: "",
                    password: ""
                }
            
        }

        limpar() {
                this.setState({
                    nome: "",
                    login: "",
                    password: ""
                });
            
        }
    
        confirmar() {
    
                this.props.onCadastrar({
                    nome: this.state.nome,
                    login: this.state.login,
                    password: this.state.password
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
            <button className="btn btn-primary"
                onClick={() => this.confirmar()}
            >Cadastrar</button>
            <button className="btn btn-primary marginButton"
                onClick={() => this.limpar()}
            >Limpar</button>
        </div>
    }
}

export { AtendenteForm }; 