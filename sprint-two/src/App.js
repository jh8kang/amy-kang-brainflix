import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage'
import Header from './components/Header/Header';
import Main from './components/Main/Main'




class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/" exact component={()=><Main/>}/>
            <Route path="/upload" exact component={UploadPage}/>
            <Route path="/:videoId" component={(routerProps)=><Main {...routerProps}/>}/>
            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

