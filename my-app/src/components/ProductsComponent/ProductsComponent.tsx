import React from 'react';
import './ProductsComponent.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from "@mui/material";
import EditProductFormComponent from '../EditProductFormComponent/EditProdutFormComponent';

class ProductsComponent extends React.Component {

  state = {
    products: {
      content: [], empty: false, first: false, last: false, number: 0, numberOfElements: 0, pageable:
      {
        offset: 0, pageNumber: 0, pageSize: 0, paged: false, sort:
          { empty: false, sorted: false, unsorted: false }, unpaged: false
      }, size: 0, sort:
        { empty: false, sorted: false, unsorted: false }, totalElements: 0, totalPages: 0
    },
    loading: true,
    error: false,
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
        stripePriceId: ""
      }
    }
  }

  private columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'picture',
      headerName: 'Picture',
      width: 150,
    },
    {
      field: 'code',
      headerName: 'Code',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
    },
  ];

  componentDidMount() {
    fetch('http://localhost:8081/api/shop/product')
      .then(response => response.json())
      .then(response => this.setState({
        products: response,
        loading: false
      }))
      .catch(error => this.setState({
        loading: false,
        error: true
      }));
  }

  render() {
    return (
      <Box sx={{ height: 400, width: '100%' }}>
        {this.state.products !== undefined &&
          <DataGrid
            rows={this.state.products.content}
            columns={this.columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 15, 20]}
            checkboxSelection
            disableSelectionOnClick
          />
        }
        <EditProductFormComponent product={this.state.product}></EditProductFormComponent>
      </Box>
    );
  }
}

export default ProductsComponent;
