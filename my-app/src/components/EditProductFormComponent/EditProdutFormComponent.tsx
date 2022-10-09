import { TextField } from "@mui/material";
import React from "react";


class EditProductFormComponent extends React.Component<{}, {name: string}> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: { target: { value: string; }; }) {
        this.setState({ name: event.target.value }); 
       }

   handleSubmit(event: any) {
       alert('A name was submitted: ' + this.state.name);
       event.preventDefault();
   }

    render() {
        return (
            <div className="edit-product-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <TextField label="Name" variant="outlined" value={this.state.name} onChange={this.handleChange}/>
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditProductFormComponent;