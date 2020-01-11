import React, {Component} from "react";
import List from "./List"
import './../styles/App.css';
import NavigationBar from "./NavigationBar"

class App extends Component {
  render() {
    return <div className="page-container">
      <NavigationBar title={"Serienator"}/>
      <main className="main">
        <List/>
      </main>
    </div>
  };
}

export default App