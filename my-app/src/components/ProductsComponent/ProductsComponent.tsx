import React from 'react';
import './ProductsComponent.scss';
import {Product} from "../../models/product";
import {fetchUserData} from "../../services/ProductService";

class ProductsComponent extends React.Component {

  private products: Product[] = [];

  constructor(props: {} | Readonly<{}>) {
    super(props);
    fetchUserData();
  }

  render() {
    return (
        <div className="ProductsComponent" data-testid="ProductsComponent">
          ProductsComponent Component
        </div>
    );
  }
}

export default ProductsComponent;
