import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext'
import { Nav } from './Nav'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
      </div>
    </MovieProvider>
  );
}

export default App;
