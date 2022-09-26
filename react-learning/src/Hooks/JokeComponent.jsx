import React, { useRef, useState } from "react";
import GenerateJokes from "./GenerateJokes";

export default function JokeComponent() {
  /**
     * The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
     */
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const generateJoke = (e) => {
    e.preventDefault();
    setFirst(firstRef.current.value);
    setLast(lastRef.current.value);
  };
  const joke = GenerateJokes(firstName, lastName);
  return (
    <div>
      <h1>Joke Generator</h1>
      <form>
        <input ref={firstRef} placeholder="firstname" />
        <input ref={lastRef} placeholder="firstname" />
        <button onClick={generateJoke}>Generator</button>
      </form>
      <h3>{joke}</h3>
    </div>
  );
}
