import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import UploadPage from './components/UploadPage/UploadPage'
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={(routerProps)=><HomePage {...routerProps}/>}/>
            <Route path="/upload" exact component={UploadPage}/>
            <Route path={`/:videoId`} component={(routerProps)=><HomePage {...routerProps} />}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

