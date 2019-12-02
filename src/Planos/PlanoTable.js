import React from 'react';

export default class PlanoTable extends React.Component {

    render() {
        return <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th >Plano</th>
                        <th >Valor</th>
                        <th >Escolha</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.itens.map((plano) => (
                        <tr key={plano.id}>
                            <td >{plano.id}</td>
                            <td >{plano.plano}</td>
                            <td >R$ {plano.valor}</td>
                            <td ><button className="btn btn-success" type="button" onClick={() => this.props.onEditar(plano)}>Editar</button></td>
                            <td><button className="btn btn-danger" type="button" onClick={() => this.props.onApagar(plano)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    }
}

export { PlanoTable }; 
