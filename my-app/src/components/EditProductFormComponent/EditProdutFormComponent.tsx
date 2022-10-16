import { Button, TextField } from "@mui/material";
import React from "react";
import { Product } from "../../models/product";
import "../EditProductFormComponent/EditProductFormComponent.scss";

export interface ProductProps {
    product: Product;
    handleFormState: (value: boolean) => void;
}

class EditProductFormComponent extends React.Component<ProductProps, Product> {
    constructor(props: ProductProps) {
        super(props)
        this.state = this.props.product;
    }

    componentDidMount(): void {
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormState = this.handleFormState.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<ProductProps>, prevState: Readonly<Product>, snapshot?: any): void {
        if (this.props.product.id !== prevState.id) {
            this.setState(this.props.product);
        }
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
            body: JSON.stringify(this.state)
        };
        fetch("http://localhost:8081/api/shop/product", requestOptions);
    }

    handleFormState(event: any) {
        event.preventDefault();
        this.props.handleFormState(false);
    }

    render() {
        return (
            <div className="edit-product-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-product-form-wrapper">
                        <div className="edit-product-form-input">
                            <TextField name="name" label="Name" variant="outlined" value={this.state.name || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="picture" label="Picture" variant="outlined" value={this.state.picture || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input1">
                            <TextField name="code" label="Code" variant="outlined" value={this.state.code || ''} onChange={this.handleChange} />
                            <TextField name="price" label="Price" variant="outlined" value={this.state.price || ''} onChange={this.handleChange} />
                            <TextField name="quantity" label="Quantity" variant="outlined" value={this.state.quantity || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input2">
                            <TextField name="type" label="Type" variant="outlined" value={this.state.type || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input3">
                            <TextField name="category" label="Category" variant="outlined" value={this.state.category || ''} onChange={this.handleChange} />
                            <TextField name="subCategory" label="Sub Category" variant="outlined" value={this.state.subCategory || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input4">
                            <TextField name="stripeProductId" label="Stripe Product Id" variant="outlined" value={this.state.stripeProductId || ''} onChange={this.handleChange} />
                            <TextField name="stripePriceId" label="Stripe Price Id" variant="outlined" value={this.state.stripePriceId || ''} onChange={this.handleChange} />
                        </div>
                    </div>
                    <Button variant="contained" type="submit" className="submit-button">Submit</Button>
                    <Button variant="contained" color="error" onClick={this.handleFormState}>Cancel</Button>
                </form>
            </div>
        );
    }
}

export default EditProductFormComponent;
