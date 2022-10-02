import React from 'react';
import './ProductsComponent.scss';
import {Page, Product} from "../../models/product";
import {fetchProductsList} from "../../services/ProductService";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box} from "@mui/material";

class ProductsComponent extends React.Component {

  private products: Page = new Page();

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

  constructor(props: any) {
    super(props);
    this.getData().then(r => r);
  }

  componentDidMount() {
    console.log(this.products);
  }

  async getData() {
    fetchProductsList().then(data => {
      if (data !== undefined) {
        this.products = data.data;
        console.log(this.products);
      }
    });
  }

  render() {
    return (
        <Box sx={{height: 400, width: '100%'}}>
          {this.products.content !== undefined &&
              <DataGrid
                  rows={this.products.content}
                  columns={this.columns}
                  pageSize={this.products.size}
                  rowsPerPageOptions={[this.products.size]}
                  checkboxSelection
                  disableSelectionOnClick
              />
          }
        </Box>
    );
  }
}

export default ProductsComponent;
