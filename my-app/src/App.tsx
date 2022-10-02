import React from 'react';
import './App.scss';
import SidePanelComponent from "./components/SidePanelComponent/SidePanelComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "./config/routes";
import ProductsComponent from "./components/ProductsComponent/ProductsComponent";

class App extends React.Component {
  // private routes: [] = routes;
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <SidePanelComponent></SidePanelComponent>
            <Routes>
              <Route path="/products" element={<ProductsComponent/>}>
              </Route>
            {/*  {routes.map((route) => (*/}
            {/*      <Route key={route.path} path={route.path} element={route.component}>*/}
            {/*      </Route>*/}
            {/*  ))}*/}
            </Routes>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
