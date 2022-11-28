import React from 'react';
import './App.scss';
import './libs/_vars.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <div class="content">
        <Home />
      </div>

      <footer class="footer"></footer>
    </div>
  );
}

export default App;
