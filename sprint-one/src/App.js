import './App.scss';
import Header from './components/Header/Header';
import React, { Component } from 'react';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;

