import React from 'react';
import './styles.css';

function StyledButton({ text }) {
  const inlineStyle = {
    backgroundColor: 'lightblue',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px'
  };

  return (
    <div>
      <button style={inlineStyle}>{text} (Inline CSS)</button>
      <br /><br />

      <style>{`
        .internalButton {
          background-color: lightgreen;
          padding: 10px;
          font-size: 16px;
          margin-bottom: 10px;
        }
      `}</style>
      <button className="internalButton">{text} (Internal CSS)</button>
      <br /><br />

      <button className="externalButton">{text} (External CSS)</button>
    </div>
  );
}

export default StyledButton;
