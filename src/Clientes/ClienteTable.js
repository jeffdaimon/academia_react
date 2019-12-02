
import React from 'react';

export default class ClienteTable extends React.Component {

    render() {
        return <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th >Matricula</th>
                        <th >Nome</th>
                        <th >CPF</th>
                        <th >Endereço</th>
                        <th >Telefone</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.itens.map((cliente) => (
                        <tr key={cliente.id}>
                            <td >{cliente.id}</td>
                            <td >{cliente.matricula}</td>
                            <td >{cliente.nome}</td>
                            <td >{cliente.cpf}</td>
                            <td >{cliente.endereco}</td>
                            <td >{cliente.telefone}</td>
                            <td ><button className="btn btn-success" type="button" onClick={() => this.props.onEditar(cliente)}>Editar</button></td>
                            <td><button className="btn btn-danger" type="button" onClick={() => this.props.onApagar(cliente)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    }
}

export { ClienteTable }; 
