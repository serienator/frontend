import React, {Component} from "react";
import List from "./List"
import './../styles/App.css';
import Title from "./Title"

class App extends Component {
  render() {
    return <div>
      <Title title={"Series"}/>
      <List/>
          </div>
  };
}

export default App