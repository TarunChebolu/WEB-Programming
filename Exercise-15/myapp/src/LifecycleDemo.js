import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('LifecycleDemo: constructor');
  }

  componentDidMount() {
    console.log('LifecycleDemo: componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('LifecycleDemo: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('LifecycleDemo: componentWillUnmount');
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Lifecycle Demo Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
