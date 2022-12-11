import React from 'react';
import Home from './pages/Home';

import styles from './libs/style.scss';

export const SearchContext = React.createContext();

function App() {
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;
