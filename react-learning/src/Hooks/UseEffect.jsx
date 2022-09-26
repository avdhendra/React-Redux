import React, { useEffect } from "react";

export default function UseEffect() {
  //On every render

  //useEffect maintain all the lifecylc which is inside the ClassComponent
  //On Every Render
  useEffect(() => {
    console.log("I Re-rendered");
  });

  //On First Render/mount Only-ComponentDidMount Alternative
  useEffect(() => {}, []);
  //[] dependacy array

  //on first Render+whenever dependancy changes-ComponentDidUpdate Alternative
  useEffect(() => {
    console.log(`the name change: ${name}`);
    //if we dont pass the name in dependancy in array we get error
    //missing dependcy name
    //what ever variable  use inside the hook need to go inside the array
  }, [name]);

  //Follow the same rule expect this handles the unmounting on component !-componentWillUnmount Alternative
  useEffect(() => {
    console.log(`the name change :${name}`);
    return () => {
      console.log(`detach`);
    };
  });
  //every time it rerender it remove the previous component mount
  //so that the memory leak wont happen

  return <div>UseEffect</div>;
}
