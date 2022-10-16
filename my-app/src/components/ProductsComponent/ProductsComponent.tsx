import React from "react";
import "./ProductsComponent.scss";
import { Product } from "../../models/product";
import EditProductFormComponent from "../EditProductFormComponent/EditProdutFormComponent";
import { Button, Divider } from "@mui/material";

class ProductsComponent extends React.Component {
  state = {
    products: {
      content: [],
      empty: false,
      first: false,
      last: false,
      number: 0,
      numberOfElements: 0,
      pageable: {
        offset: 0,
        pageNumber: 0,
        pageSize: 0,
        paged: false,
        sort: {
          empty: false,
          sorted: false,
          unsorted: false
        },
        unpaged: false,
      },
      size: 0,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false
      },
      totalElements: 0,
      totalPages: 0,
    },
    loading: true,
    error: false,
    formState: false,
    product: {
      id: "",
      name: "",
      code: "",
      picture: "",
      price: 0,
      quantity: 0,
      type: "",
      category: "",
      subCategory: "",
      stripeProductId: "",
      stripePriceId: "",
      errors: {
        name: "",
        code: "",
        picture: "",
        price: "",
        quantity: "",
        type: "",
        category: "",
        subCategory: "",
        stripeProductId: "",
        stripePriceId: "",
      },
    },
  };

  componentDidMount() {
    fetch("http://localhost:8081/api/shop/product")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          products: response,
          loading: false,
        })
      )
      .catch((error) =>
        this.setState({
          loading: false,
          error: true,
        })
      );
  }

  editProduct(editableProduct: Product) {
    this.setState({
      product: editableProduct,
      formState: true
    });
  }

  handleFormState = (value: boolean) => {
    this.setState({ formState: value })
  }

  render() {
    return (
      <div className="container">
        <div className="list-of-products">
          {this.state.products &&
            this.state.products.content.map((product: Product) => (
              <div className="produt-display" key={product.id}>
                <div>{product.name}</div>
                <div>
                  <Button variant="contained" onClick={() => this.editProduct(product)}>Edit</Button>
                </div>
              </div>
            ))}
        </div>
        {this.state.formState &&
          <div className="edit-form-display">
            <Divider />
            <EditProductFormComponent
              product={this.state.product}
              handleFormState={this.handleFormState}
            ></EditProductFormComponent>
          </div>
        }
      </div>
    );
  }
}

export default ProductsComponent;
