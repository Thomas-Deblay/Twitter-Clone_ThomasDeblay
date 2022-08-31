import React from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
