import React, { useEffect, useState } from 'react';

function RandomJoke() {
  const [joke, setJoke] = useState({});

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
        
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke from API</h2>
      {joke.setup && <p>{joke.setup}</p>}
      {joke.punchline && <p>{joke.punchline}</p>}
      <button onClick={fetchJoke}>Refresh Joke</button>
    </div>
  );
}

export default RandomJoke;
