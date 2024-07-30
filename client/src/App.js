import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import cats from './mocks/cats.json';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className='App'>
      <Filter />
      <Cards cats={cats} />
    </div>
  );
}

export default App;
