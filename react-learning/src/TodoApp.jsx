import React, { Component } from "react";
import TodoList1 from "./TodoList1";
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
        <TodoList1 items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: [...items,],
      text: "",
    }));
  }
}
/**
   * A “key” is a special string attribute you need to include when 
   * creating lists of elements in React. Keys are used to React to 
   * identify which items in the list are changed, updated, or deleted. 
   * In other words, we can say that keys are used to give an identity 
   * to the elements in the lists. The next thing that comes to mind is 
   * that what should be good to be chosen as key for the items in lists. 
   * 
   * 
   * 
   * 
   * const numbers = [ 1, 2, 3, 4, 5 ];
  
        const updatedNums = numbers.map((number)=>{
            return <li key={index}>{number} </li>;
        });
   * 
   * 
   * You can also assign the array indexes as keys to the list items
   * 
   */
