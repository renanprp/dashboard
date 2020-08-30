import React from 'react';
import { Header, Content } from './components';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Dashboard/>
    </div>
  );
}

export default App;
