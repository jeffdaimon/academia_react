
import React from 'react';

export default class ProdutoTable extends React.Component {

    render() {
        return <div>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th >Nome</th>
                    <th >Tipo</th>
                    <th >Valor R$</th>
                    <th >Estoque</th>
                    <th>Escolha</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.itens.map((produto) => (
                    <tr key={produto.id}>
                        <td >{produto.id}</td>
                        <td >{produto.nome}</td>
                        <td >{produto.tipo}</td>
                        <td >{produto.valor}</td>
                        <td >{produto.estoque}</td>
                        <td ><button className="btn btn-success" type="button" onClick={() => this.props.onEditar(produto)}>Editar</button></td>
                        <td><button className="btn btn-danger" type="button" onClick={() => this.props.onApagar(produto)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
            
            
        </div>
    }
}

export { ProdutoTable }; 
