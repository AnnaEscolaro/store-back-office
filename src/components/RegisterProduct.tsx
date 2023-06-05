import { useState } from 'react';
import React from 'react';
import Product from './Product';
import '../styles/RegisterProduct.css';
import { ProductType } from '../types';

type Props = {
  handleSubmit: (formData: ProductType) => void
};

const INITIAL_STATE = {
  name: '',
  description: '',
  price: 0,
  image: '',
  tags: '',
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;

  const [formData, setFormData] = useState(INITIAL_STATE);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSubmit(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, id, value, valueAsNumber } = e.target;

    if (type === 'number') {
      setFormData({
        ...formData,
        [id]: valueAsNumber,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };
  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              onChange={ handleChange }
              value={ formData.name }
              type="text"
              id="name"
              required
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input onChange={ handleChange } value={formData.description} type="text" id="description" required />
          </label>
          <label htmlFor="price">
            Preço
            <input onChange={ handleChange } value={formData.price} type="number" id="price" required />
          </label>
          <label htmlFor="image">
            Imagem
            <input onChange={ handleChange } value={formData.image} type="text" id="image" />
          </label>
          <label htmlFor="tags">
            Tags
            <input onChange={ handleChange } value={formData.tags} type="text" id="tags" />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ formData } />
      </div>
    </main>
  );
}
