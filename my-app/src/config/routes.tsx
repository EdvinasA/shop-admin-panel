import ProductsComponent from "../components/ProductsComponent/ProductsComponent";
import App from "../App";

let routes = [
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
export default routes;
