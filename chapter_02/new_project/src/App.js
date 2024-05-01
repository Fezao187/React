import React, { Component } from 'react';
import Products from './Products';
class App extends Component {
  render() {
    return (
      <div>
        <h1>
          My First React App!
          <Products/>
        </h1>
      </div>
    );
  }
}
export default App;