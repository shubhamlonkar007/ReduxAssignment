import React, { Component } from 'react';

//import './App.css';
import Counter from './container/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App"  >
      <Counter  />
      </div>
    );
  }

}

export default App;
