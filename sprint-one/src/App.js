import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage'
import Header from './components/Header/Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/upload" component={UploadPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

