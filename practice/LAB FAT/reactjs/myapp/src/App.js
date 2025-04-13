import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App(props) {
  let fruits = ["apple", "banana", "pineapple"];
  const [i, setI] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      setI(i+1);
    }, 1000);
  });

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h1>{i}</h1>
      <button onClick={()=> {setI(i+1)}}>click me</button>
    </>
  );
}

App.propTypes = {
  age: PropTypes.number.isRequired
}

export default App;
