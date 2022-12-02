import React from 'react';
import './App.scss';
import './libs/_variables.scss';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="wrapper">
      <Home />
      <Cart />
    </div>
  );
}

export default App;
