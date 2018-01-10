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
    this.makeCurrent = this.makeCurrent.bind(this);
    this.makeEdit = this.makeEdit.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    this.addIngredStep = this.addIngredStep.bind(this);
    this.remover = this.remover.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      recipes: [
        {
          name: "Cheesy Broccoli",
          ingredients: [
            { name: "carrots", type: 2, editing: false },
            { name: "cheese", type: 2, editing: false },
            { name: "broccoli", type: 2, editing: false }
          ],
          steps: [
            { name: "preheat oven", type: 3, editing: false },
            { name: "chop carrots", type: 3, editing: false },
            { name: "roast", type: 3, editing: false }
          ],
          type: 1,
          editing: false
        },
        {
          name: "Cheesy Carrots",
          ingredients: [
            { name: "carrots", type: 2, editing: false },
            { name: "cheese", type: 2, editing: false },
            { name: "broccoli", type: 2, editing: false }
          ],
          steps: [
            { name: "preheat oven", type: 3, editing: false },
            { name: "chop carrots", type: 3, editing: false },
            { name: "roast", type: 3, editing: false }
          ],
          type: 1,
          editing: false
        },
        {
          name: "Carrots and Broccoli",
          ingredients: [
            { name: "carrots", type: 2, editing: false },
            { name: "cheese", type: 2, editing: false },
            { name: "broccoli", type: 2, editing: false }
          ],
          steps: [
            { name: "preheat oven", type: 3, editing: false },
            { name: "chop carrots", type: 3, editing: false },
            { name: "roast", type: 3, editing: false }
          ],
          type: 1
        }
      ],
      current: { name: "Click to Add Name", ingredients: [], steps: [], type: 1, editing: false }
    };
  }
  getRecipies() { }
  setRecipies() { }

  makeCurrent(index, parent) {
    if (parent !== "recipes") return;
    let newCurrent;
    if (index === -1) {
      newCurrent = {
        name: "Click to Add Name",
        ingredients: [],
        steps: [],
        type: 1,
        editing: false
      };
    } else {
      newCurrent = JSON.parse(JSON.stringify(this.state.recipes[index]));
    }
    console.log(newCurrent);
    this.setState({ current: newCurrent });
  }

  makeEdit(type, index) {
    console.log(`you're trying to edit a property of type ${type} and index ${index}`)
    if (type === 1) {
      this.setState(prevState => prevState.current.editing = true)
    }
    if (type === 2) {
      this.setState(prevState => prevState.current.ingredients[index].editing = true);
    }
    if (type === 3) {
      this.setState(prevState => prevState.current.steps[index].editing = true);
    }

  }

  changeHandle(e, type, index) {
    e.persist();
    console.log(e);
    console.log(e.target.value);
    if (type === 1) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.current.name = e.target.value;
        newstate.current.editing = false;
        return newstate;
      });
    }
    if (type === 2) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.current.ingredients[index].name = e.target.value;
        newstate.current.ingredients[index].editing = false;
        return newstate;
      });
    }
    if (type === 3) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.current.steps[index].name = e.target.value;
        newstate.current.steps[index].editing = false;
        return newstate;
      });
    }
  }

  addIngredStep(type) {
    console.log(`you're trying to add an ingredient or step of type ${type}`)
    if (type === 2) {

      this.setState(prevState => {
        const newThing = { name: "addName", type: 2, editing: true }
        const newstate = { ...prevState }
        newstate.current.ingredients.push(newThing);
        return newstate;
      })
    }
    if (type === 3) {
      this.setState(prevState => {
        const newThing = { name: "addName", type: 3, editing: true }
        const newstate = { ...prevState }
        newstate.current.steps.push(newThing);
        return newstate;
      });
    }
  }
  save() {
    this.setState(prevState => {
      const newstate = { ...prevState }
      newstate.recipes.push(this.state.current);
      return newstate;
    })
    this.makeCurrent(-1, "recipes");
  }

  iterate(list, parent) {
    return list.map((listItem, index) => (
      <Iterator
        prop={listItem}
        index={index}
        parent={parent}
        makeCurrent={this.makeCurrent}
        key={index}
        makeEdit={this.makeEdit}
        changeHandle={this.changeHandle}
        remover={this.remover}
      />
    ));
  }

  remover(type, index) {
    if (type === 1) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.recipes.splice(index, 1);
        return newstate;
      });
    }
    if (type === 2) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.current.ingredients.splice(index, 1);
        return newstate;
      });
    }
    if (type === 3) {
      this.setState(prevState => {
        const newstate = { ...prevState }
        newstate.current.steps.splice(index, 1);
        return newstate;
      });
    }
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
            <ul>{this.iterate(this.state.recipes, "recipes")}</ul>
            <button
              className="addbtn"
              onClick={() => this.makeCurrent(-1, "recipes")}
            >
              + Add a Recipe
            </button>
          </div>
          <Display
            iterate={this.iterate}
            current={this.state.current}
            makeEdit={this.makeEdit}
            changeHandle={this.changeHandle}
            addIngredStep={this.addIngredStep}
            save={this.save}
            makeCurrent={this.makeCurrent}
          />
        </div>
      </div>
    );
  }
}

export default App;
