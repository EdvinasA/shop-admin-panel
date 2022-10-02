import ProductsComponent from "../components/ProductsComponent/ProductsComponent";
import App from "../App";

export default [
  {
    path: "/",
    component: <App/>,
    exact: true,
    showMenu: true,
    children: []
  },
  {
    path: "/products",
    component: <ProductsComponent/>,
    exact: true,
    showMenu: true,
    children: []
  }
];
