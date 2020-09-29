import React from 'react';
import Routes from './routes';
import { MenuSidebar } from './components/Layout/MenuSidebar';
function App() {
  return (
    <div className="App">
      <MenuSidebar/>
      <Routes/>
    </div>
  );
}

export default App;
