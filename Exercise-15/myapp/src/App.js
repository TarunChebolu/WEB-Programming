import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import StyledButton from './StyledButton';
import LifecycleDemo from './LifecycleDemo';
import Counter from './Counter';
import RandomJoke from './RandomJoke';
import FocusInput from './FocusInput';
import ThemeProvider from './ThemeContext';
import ParentChild from './ParentChild';
import FormWithState from './FormWithState';
import FormWithRef from './FormWithRef';

function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <Header title="My React Application" />
        <Content />
        <Footer />

        <hr />

        <StyledButton text="Styled Button" />

        <hr />

        {showLifecycle && <LifecycleDemo />}
        <button onClick={() => setShowLifecycle(!showLifecycle)}>
          Toggle LifecycleDemo
        </button>

        <hr />

        <Counter />

        <hr />

        <RandomJoke />

        <hr />

        <FocusInput />

        <hr />

        <ParentChild />

        <hr />

        <FormWithState />

        <hr />

        <FormWithRef />
      </div>
    </ThemeProvider>
  );
}

export default App;
