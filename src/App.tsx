import { useState } from 'react';
import './styles/App.css';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

function App() {
  const [component, setComponent] = useState(true);
  const [products, setProducts] = useState<ProductWithId[]>([]);

  const handleCreateProduct = (formData: ProductType) => {
    const id = Date.now();

    const newObject = {
      id,
      ...formData,
    };

    // const productWithId = Object.assign(...formData, { id: Date.now() });

    setProducts([
      ...products,
      newObject,
    ]);
  };

  const handleDeleteProduct = (id: string | number) => {
    const filteredProducts = products.filter((product) => product.id !== id);

    setProducts(filteredProducts);
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => setComponent(true) }>Cadastrar</button>
        <button onClick={ () => setComponent(false) }>Ver produtos</button>
      </header>
      {component ? (
        <RegisterProduct handleSubmit={ handleCreateProduct } />
      ) : (
        <ListProducts
          products={ products }
          handleDelete={ handleDeleteProduct }
        />
      )}
    </div>
  );
}

export default App;
