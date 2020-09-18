import React from 'react';
import './App.css';
import { MovieProvider } from './MovieContext'
import { Nav } from './Nav'
import { MovieList} from './MovieList'
import { AddMovie } from './AddMovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
