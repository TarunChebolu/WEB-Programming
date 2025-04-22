import React, { useState } from 'react';

function FormWithState() {
  const [formValues, setFormValues] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: Name: ${formValues.name}, Email: ${formValues.email}`);
  };

  return (
    <div>
      <h2>Form using useState</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>
          Preview: {formValues.name} | {formValues.email}
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormWithState;
