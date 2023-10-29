import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class Products extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.title.titleTwo} - {this.props.currentCategory}
        </h1>

        <Table>
          <thead>
            <tr>
              <th>Number of the Product</th>
              <th>Product Name</th>
              <th>Quantitiy Per Unit</th>
              <th>Price</th>
              <th>in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td><Button onClick={()=>this.props.addToCard(product)}>Select</Button></td>
            </tr>

))}
            
          </tbody>
        </Table>
      </div>
    );
  }
}
