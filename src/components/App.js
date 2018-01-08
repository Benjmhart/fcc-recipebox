import React, { Component } from "react";
import Iterator from "./Iterator";
import Display from "./Display";
import "../styles/App.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  constructor() {
    super();
    this.getRecipies = this.getRecipies.bind(this);
    this.setRecipies = this.setRecipies.bind(this);
    this.iterate = this.iterate.bind(this);
    this.state = {
      recipes: [
        {
          name: "Cheesy Broccoli",
          ingredients: [
            { name: "carrots" },
            { name: "cheese" },
            { name: "broccoli" }
          ],
          steps: [
            { name: "preheat oven" },
            { name: "chop carrots" },
            { name: "roast" }
          ]
        },
        {
          name: "Cheesy Carrots",
          ingredients: [
            { name: "carrots" },
            { name: "cheese" },
            { name: "broccoli" }
          ],
          steps: [
            { name: "preheat oven" },
            { name: "chop carrots" },
            { name: "roast" }
          ]
        },
        {
          name: "Carrots and Broccoli",
          ingredients: [
            { name: "carrots" },
            { name: "cheese" },
            { name: "broccoli" }
          ],
          steps: [
            { name: "preheat oven" },
            { name: "chop carrots" },
            { name: "roast" }
          ]
        }
      ],
      current: {
        name: "",
        ingredients: [],
        steps: []
      }
    };
  }
  getRecipies() {}
  setRecipies() {}

  iterate(list) {
    return list.map(listItem => <Iterator prop={listItem} />);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            FCC<i className="fa fa-free-code-camp" /> Recipe Box
          </h1>
        </header>
        <div className="container">
          <div className="sidebar">
            <ul>{this.iterate(this.state.recipes)}</ul>
            <button className="addbtn">+ Add a Recipe</button>
          </div>
          <Display iterate={this.iterate} current={this.state.current} />>
        </div>
      </div>
    );
  }
}

export default App;
