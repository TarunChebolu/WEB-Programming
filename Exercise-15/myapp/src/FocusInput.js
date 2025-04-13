import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Focus Input Example</h2>
      <input ref={inputRef} type="text" placeholder="Type..." />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

export default FocusInput;
