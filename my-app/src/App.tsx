import React from "react";
import "./App.scss";
import SidePanelComponent from "./components/SidePanelComponent/SidePanelComponent";
import { BrowserRouter } from "react-router-dom";
import EditProductFormComponent from "./components/EditProductFormComponent/EditProdutFormComponent";

class App extends React.Component {
  // private routes: [] = routes;
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SidePanelComponent></SidePanelComponent>
          <EditProductFormComponent></EditProductFormComponent>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
