import React, {Component} from "react";
import List from "./List"
import './../styles/App.css';
import NavigationBar from "./NavigationBar"

class App extends Component {
  render() {
    return <div>
      <NavigationBar title={"Serienator"}/>
      <List/>
          </div>
  };
}

export default App