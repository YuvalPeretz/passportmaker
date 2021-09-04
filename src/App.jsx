import React from 'react';
import './App.css';
import Creator from './bottom/creator/creator.component';
import Middle from './middle/middle';
import Top from './top/top';

const App = () => {
  return (
    <div id="app">
      <div className="main-container">
        <Top />
      </div>
      <div className="main-container">
        <Middle />
      </div>
      <Creator />
    </div>
  );
}

export default App;
