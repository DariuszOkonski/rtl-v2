import './App.css';
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import cats from './mocks/cats.json';

function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <Filter />
        <Cards cats={cats}></Cards>
      </div>
    </div>
  );
}

export default App;
