import React from 'react';
import './App.scss';
import SidePanelComponent from "./components/SidePanelComponent/SidePanelComponent";

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <SidePanelComponent></SidePanelComponent>
    </div>
    );
  }
}

export default App;
