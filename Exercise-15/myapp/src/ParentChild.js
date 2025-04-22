import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return <p>Message from Parent: {message}</p>;
}

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

function ParentChild() {
  return (
    <div>
      <h2>Parent - Child Example</h2>
      <Child message="Hello from the Parent!" />
    </div>
  );
}

export default ParentChild;
