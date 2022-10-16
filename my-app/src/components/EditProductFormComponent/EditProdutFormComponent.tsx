import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Product } from "../../models/product";
import "../EditProductFormComponent/EditProductFormComponent.scss";

export interface ProductProps {
    product: Product;
}

const EditProductFormComponent = ({ product }: ProductProps) => {

    const [productState, setProductState] = useState(product);

    const handleChange = (event: { target: { name?: any, value?: any }; }) => {
        const { name, value } = event.target;
        setProductState({ [name]: value } as unknown as Product);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productState)
        };
        fetch("http://localhost:8081/api/shop/product", requestOptions);
    }

    useEffect(() => {
        setProductState(product);
    }, [product])

    return (
        <div className="edit-product-form">
            <form onSubmit={handleSubmit}>
                <div className="edit-product-form-wrapper">
                    <div className="edit-product-form-input">
                        <TextField name="name" label="Name" variant="outlined" value={productState.name || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="picture" label="Picture" variant="outlined" value={productState.picture || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="code" label="Code" variant="outlined" value={productState.code || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="price" type="number" label="Price" variant="outlined" value={productState.price || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="quantity" type="number" label="Quantity" variant="outlined" value={productState.quantity || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="type" label="Type" variant="outlined" value={productState.type || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="category" label="Category" variant="outlined" value={productState.category || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="subCategory" label="Sub Category" variant="outlined" value={productState.subCategory || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="stripeProductId" label="Stripe Product Id" variant="outlined" value={productState.stripeProductId || ''} onChange={handleChange} />
                    </div>
                    <div className="edit-product-form-input">
                        <TextField name="stripePriceId" label="Stripe Price Id" variant="outlined" value={productState.stripePriceId || ''} onChange={handleChange} />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditProductFormComponent;
