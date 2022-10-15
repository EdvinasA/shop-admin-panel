import { TextField } from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";
import { Product } from "../../models/product";
import "../EditProductFormComponent/EditProductFormComponent.scss";

export interface ProductProps {
    product: Product;
}

class EditProductFormComponent extends React.Component<ProductProps, Product> {
    constructor(props: ProductProps) {
        super(props)
        this.state = {
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
        }
    }

    componentDidMount(): void {
        this.setState(this.props.product);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: { target: { name?: any, value?: any }; }) {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Product);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.props.product)
        };
        fetch("http://localhost:8081/api/shop/product", requestOptions);
    }

    render() {
        return (
            <div className="edit-product-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-product-form-wrapper">
                        <div className="edit-product-form-input">
                            <TextField name="name" label="Name" variant="outlined" value={this.props.product.name || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="picture" label="Picture" variant="outlined" value={this.props.product.picture || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="code" label="Code" variant="outlined" value={this.props.product.code || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="price" type="number" label="Price" variant="outlined" value={this.props.product.price || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="quantity" type="number" label="Quantity" variant="outlined" value={this.props.product.quantity || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="type" label="Type" variant="outlined" value={this.props.product.type || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="category" label="Category" variant="outlined" value={this.props.product.category || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="subCategory" label="Sub Category" variant="outlined" value={this.props.product.subCategory || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="stripeProductId" label="Stripe Product Id" variant="outlined" value={this.state.stripeProductId || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="stripePriceId" label="Stripe Price Id" variant="outlined" value={this.props.product.stripePriceId || ''} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EditProductFormComponent;