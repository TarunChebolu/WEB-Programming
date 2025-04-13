import React, { useRef, useState } from 'react';

function FormWithRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmittedData({ name, email });
  };

  return (
    <div>
      <h2>Form using useRef</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" type="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h4>Submitted Data:</h4>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormWithRef;
