import { TextField } from "@mui/material";
import React from "react";
import { Product } from "../../models/product";
import "../EditProductFormComponent/EditProductFormComponent.scss";

export interface ProductProps {
    product: Product;
  }

class EditProductFormComponent extends React.Component<ProductProps, Product> {
    constructor(props: ProductProps) {
        super(props)
        const { product } = this.props;
        this.state = {
            id: product.id,
            name: product.name,
            code: product.code,
            picture: product.picture,
            price: product.price,
            quantity: product.quantity,
            type: product.type,
            category: product.category,
            subCategory: product.subCategory,
            stripeProductId: product.stripeProductId,
            stripePriceId: product.stripePriceId,
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
                stripePriceId: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: { target: {name?: any, value?: any}; }) {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Product);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch("http://localhost:8081/api/shop/product", requestOptions);
    }

    render() {
        return (
            <div className="edit-product-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-product-form-wrapper">
                        <div className="edit-product-form-input">
                            <TextField name="name" label="Name" variant="outlined" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="picture" label="Picture" variant="outlined" value={this.state.picture} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="code" label="Code" variant="outlined" value={this.state.code} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="price" type="number" label="Price" variant="outlined" value={this.state.price} onChange={this.handleChange}  />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="quantity" type="number" label="Quantity" variant="outlined" value={this.state.quantity} onChange={this.handleChange}  />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="type" label="Type" variant="outlined" value={this.state.type} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="category" label="Category" variant="outlined" value={this.state.category} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="subCategory" label="Sub Category" variant="outlined" value={this.state.subCategory} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="stripeProductId" label="Stripe Product Id" variant="outlined" value={this.state.stripeProductId} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="stripePriceId" label="Stripe Price Id" variant="outlined" value={this.state.stripePriceId} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditProductFormComponent;