import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className='App'>
      <Card
        name='Sydney'
        phone='111-111-1111'
        email='laith@hotmail.com'
        image={{
          url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'cute cat',
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
