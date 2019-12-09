import React from 'react';
import axios from 'axios';
import '../style.css';

export default class Login extends React.Component  {
    constructor() {
        super();
        this.state={
            login:"",
            password:""
        };
    }
    async login() {
        const login= encodeURI(this.state.login);
        const password= encodeURI(this.state.password);
        let retorno = await 
                    axios.get("/api/atendentes/login/?login="
                    +login+"&password="+password);
        let token = retorno.headers.token;
        if(token) {
            this.props.onLogin(retorno.data, token);
        }
    
    } 

    componentDidMount(){
        document.title = "Login"
    }


    render() {
        return <div className="alinhamentoMeio">
            <br/>
            <h1>Sign In</h1>
            <br/>
            <label>Login: </label>
            <input className="form-control tamanhoInputLogin"
                value={this.state.login}
                onChange={
                    (evento)=>this.setState({
                        login:evento.target.value
                    })
                 }
                  />
            <br/><br/>
            <label>Senha: </label><input type="password" className="form-control tamanhoInputLogin"
             value={this.state.senha}
             onChange={
                 (evento)=>this.setState({
                    password:evento.target.value
                 })
              }
             />
            <br/><br/>
            <button className="btn btn-secondary marginButton" onClick={()=>this.login()} 
            >Login</button>
        </div>
    } 
}