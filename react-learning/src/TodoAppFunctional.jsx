import React, { useState } from "react";
import TodoList1 from "./TodoList1";

export default function TodoAppFunctional() {
  const [item, setItem] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };
    //Item.concat(newItem)
    /*
    dont set the array as concat it will make a new instance instead of copy the array and add the new element

    */
    setItem([...item, newItem]);
    setText("");
  };
  return (
    <div>
      <h3>TODO</h3>
      <TodoList1 items={item} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What need to be done?</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button> Add# {item.length + 1}</button>
      </form>
    </div>
  );
}
