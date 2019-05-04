import React, { Component, useState, useEffect } from 'react';

//Import the useState hook in from react
  //useState is a new react hook that will allow us to have a state within a functional component
  //useEffect is a new react hook that will allow us to have 'lifecycle methods' on our functional component


const App = () => {
  //this is a new react hook to create state
    //the first value is a value to keep track of count
    //the second is a function that will update state
    //we pass in 0 to useState to define that count will be defaulted to 0
  const [count, setCount] = useState(0);

  //this is a new react hook to use side effects (lifecycle methods)
    //useEffect will take in a function as an argument
    //useEffect will execute any time there is a change in state
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });


  //this is the method to increment count on state
  const increment = () => {
    //call the function setCount to update count on state
    setCount(count + 1);
  };

  //return jsx to display
  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={increment}>Clicked: {count}</button>
    </div>
  )

};

export default App;
