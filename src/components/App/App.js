import React, { Component } from "react";
import SlideShow from "./SlideShow";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: "abc"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <SlideShow />
      </div>
    );
  }
}

export default App;
