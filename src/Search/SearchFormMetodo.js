
import React from 'react';

export default class SearchFormMetodo extends React.Component {

    constructor(props) {
        super(props);{
            this.state = {
                matricula: ""
            }
        }
    }

    limpar() {
        this.setState({
            matricula: ""
        });
    }
    

    pesquisar() {
        this.props.onPesquisar({
            matricula: this.state.matricula
        });
        this.limpar();
    }

    render() {
        console.log(this.state);
        return <div>
            <h2>Digite um tipo para pesquisa: </h2>
            <br/>
            <input className="form-control w-25" placeholder="Exemplo: 183133"
                value={this.state.matricula}
                onChange={(matricula) => this.setState({
                    matricula: matricula.target.value
                })}
            />
            <br /><br />
            <button className="btn btn-primary marginButton" onClick={() => this.pesquisar()} >Confirmar</button>
            <button className="btn btn-primary marginButton" onClick={() => this.limpar()} >Limpar</button>
        </div>
        
    }
}

export { SearchFormMetodo };