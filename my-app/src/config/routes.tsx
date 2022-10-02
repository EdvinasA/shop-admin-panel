import ProductsComponent from "../components/ProductsComponent/ProductsComponent";

export default [
  {
    path: "/products",
    component: <ProductsComponent/>,
    exact: true,
    showMenu: true,
    children: []
  }
];
