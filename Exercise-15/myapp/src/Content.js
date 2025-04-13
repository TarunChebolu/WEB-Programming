import React, { useState } from 'react';

function Content() {
  const jokes = [
    "Why did the chicken cross the road?",
    "You have a big BACK!",
    "What do you call a Thief?"
  ];
  const [index, setIndex] = useState(0);

  return (
    <div>
      <p>{jokes[index]}</p>
      <button onClick={() => setIndex((index + 1) % jokes.length)}>
        Get Another Joke
      </button>
    </div>
  );
}

export default Content;
