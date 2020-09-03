import React from 'react';
import Routes from './routes';
import { Header } from './components/index';
import { MenuSidebar } from './components/Layout/MenuSidebar';
function App() {
  return (
    <div className="App">
      <MenuSidebar/>
      <Header/> 
      <Routes/>
    </div>
  );
}

export default App;
