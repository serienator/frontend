import React, {Component} from "react";
import NavigationBar from "./NavigationBar";

export default class Page extends Component {
  render() {
    return <div className="page-container">
      <header>
      <NavigationBar title={"Serienator"}/>
      </header>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}