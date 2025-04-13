import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import React from "react";

function App(props) {

  let jokes = ["I am Funny", "Why did the Chicken cross the road?", "When the man walked into the bar..."];
  const length = 3;

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const generateJoke = ()=>{
    setIndex((index+1) %length);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setIndex((index+1)%length);
    }, 1000);
  });

  return (
    <div>
      <style>
        {`
          .InternalCSS {
            background-color: yellow;
            padding: 10px;
            font-size: 20px;
          }
        `}
        
      </style>
      <header>
        <h1>{props.title}</h1>
      </header>
      <main>
        <h3>{jokes[index]}</h3>
        <button onClick = {generateJoke}>Joke Me!</button>
        
      </main>
      <footer>
        <p>This is a footer</p>
      </footer>
      <button style={{backgroundColor: 'yellow', padding: 10, fontSize: 20}}>Inline CSS</button>
        <button className = "InternalCSS">Internal CSS</button>
        <button className = "ExternalCSS">External CSS</button>

      <h1>Counter : {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  );
  
}

export default App;
