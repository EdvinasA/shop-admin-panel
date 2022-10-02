import React from 'react';
import './App.scss';
import SidePanelComponent from "./components/SidePanelComponent/SidePanelComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "./config/routes";

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <SidePanelComponent></SidePanelComponent>
            <Routes>
              {routes.map((route) => (
                  <Route path={route.path} element={route.component}>
                  </Route>
              ))}
            </Routes>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
