
import React from 'react';


export default class ContratoTable extends React.Component {

    render() {
        return <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th >Meio de pagamento</th>
                        <th >Tempo de contrato</th>
                        <th >Cliente</th>
                        <th >Plano</th>
                        <th >Escolha</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.itens.map((contrato) => (
                        <tr key={contrato.id}>
                            <td >{contrato.id}</td>
                            <td >{contrato.meioPagamento}</td>
                            <td >{contrato.tempoContrato}</td>
                            <td >{contrato.cliente ? (
                                contrato.cliente.nome) : ""}</td>
                            <td >{contrato.plano ? (
                                contrato.plano.plano) : ""}</td>
                            <td ><button className="btn btn-success" type="button" onClick={() => this.props.onEditar(contrato)}>Editar</button></td>
                            <td><button className="btn btn-danger" type="button" onClick={() => this.props.onApagar(contrato)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    }
}

export { ContratoTable }; 
