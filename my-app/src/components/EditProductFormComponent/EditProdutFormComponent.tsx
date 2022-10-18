import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { CategoryForDisplay, SubCategoryDisplay } from "../../models/category";
import { Product } from "../../models/product";
import "../EditProductFormComponent/EditProductFormComponent.scss";

export interface ProductProps {
    product: Product;
    handleFormState: (value: boolean) => void;
}

export interface EditProductState {
    product: Product;
    mainCategories: CategoryForDisplay[];
    subCategories: SubCategoryDisplay[];
    error: boolean;
}

class EditProductFormComponent extends React.Component<ProductProps, EditProductState> {
    constructor(props: ProductProps) {
        super(props)
        this.state = {
            product: this.props.product,
            mainCategories: [],
            subCategories: [],
            error: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormState = this.handleFormState.bind(this);
    }

    componentDidMount(): void {
        if (this.state.mainCategories.length === 0) {
            fetch("http://localhost:8081/api/shop/category")
                .then((response) => response.json())
                .then((response) =>
                    this.setState({
                        mainCategories: response,
                    })
                )
                .catch((error) =>
                    this.setState({
                        error: true,
                    })
                );
        }
    }

    componentDidUpdate(prevProps: Readonly<ProductProps>, prevState: Readonly<EditProductState>, snapshot?: any): void {
        if (this.props.product.id !== prevState.product.id) {
            this.setState({ product: this.props.product });
        }
    }

    handleChange(event: { target: { name?: any, value?: any }; }) {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as EditProductState);
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
                            <TextField name="name" label="Name" variant="outlined" value={this.state.product.name || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input">
                            <TextField name="picture" label="Picture" variant="outlined" value={this.state.product.picture || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input1">
                            <TextField name="code" label="Code" variant="outlined" value={this.state.product.code || ''} onChange={this.handleChange} />
                            <TextField name="price" label="Price" variant="outlined" value={this.state.product.price || ''} onChange={this.handleChange} />
                            <TextField name="quantity" label="Quantity" variant="outlined" value={this.state.product.quantity || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input2">
                            <TextField name="type" label="Type" variant="outlined" value={this.state.product.type || ''} onChange={this.handleChange} />
                        </div>
                        <div className="edit-product-form-input3">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.product.category}
                                    name="category"
                                    label="Category"
                                    onChange={this.handleChange}
                                >
                                    {this.state.mainCategories.map((category: CategoryForDisplay) => (
                                        <MenuItem key={category.categoryForEnum} value={category.categoryForEnum}>{category.categoryForDisplay}</MenuItem>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.product.subCategory}
                                    name="subCategory"
                                    label="Sub Category"
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"LAPTOPS_AND_THEIR_ACCESSORIES"}>Laptops and their accessories</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="edit-product-form-input4">
                            <TextField name="stripeProductId" label="Stripe Product Id" variant="outlined" value={this.state.product.stripeProductId || ''} onChange={this.handleChange} />
                            <TextField name="stripePriceId" label="Stripe Price Id" variant="outlined" value={this.state.product.stripePriceId || ''} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <Button variant="contained" type="submit">Submit</Button>
                        <Button variant="contained" color="error" onClick={this.handleFormState}>Cancel</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditProductFormComponent;
