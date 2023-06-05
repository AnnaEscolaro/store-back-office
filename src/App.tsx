import { useState } from 'react';
import './styles/App.css';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

function App() {
//   const [register, setRegister] = useState({});
//   const [products, setProducts] = useState([]);
  const [component, setComponent] = useState(true);

  return (
    <div className="app">
      <header>
        <button onClick={ () => setComponent(true) }>Cadastrar</button>
        <button onClick={ () => setComponent(false) }>Ver produtos</button>
      </header>
      {component ? (
        <RegisterProduct handleSubmit={ () => null } />
      ) : (
        <ListProducts products={ [] } handleDelete={ () => null } />
      )}
    </div>
  );
}

export default App;
