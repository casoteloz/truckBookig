import React, { Component } from 'react';
import Header from './components/layouts/Header';
import ContentMain from './components/ContentMain';
import './css/main.css';

class App extends Component{
  render (){
    return(
      <div className="app">
        <div className="container p-4">
          <Header />
          <ContentMain />
        </div>         
      </div>
    )
  };
}

export default App;
