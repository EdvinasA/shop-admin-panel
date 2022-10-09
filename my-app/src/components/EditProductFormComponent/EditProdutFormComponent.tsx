import { TextField } from "@mui/material";
import React from "react";


class EditProductFormComponent extends React.Component {
    render() {
        return (
            <div className="edit-product-form">
                <div>
                    <div>
                        <TextField label="Name" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Picture" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Code" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Price" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Quantity" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Type" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Category" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Sub Category" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Stripe Product Id" variant="outlined" />
                    </div>
                    <div>
                        <TextField label="Stripe Price Id" variant="outlined" />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProductFormComponent;