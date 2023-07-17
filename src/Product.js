import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <Products>
      <ProductInfo>
        <p className='title'>{title}</p>
        <p className='price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </Rating>
      </ProductInfo>

      <ProductImage src={image} />
      <Button onClick={addToBasket}>Add To Basket</Button>
    </Products>
  );
};

const Products = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  min-width: 100px;
  background-color: whitesmoke;
  padding: 10px;
  width: 100%;
  margin: 10px;
  z-index: 1;
`;

const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
  .price {
    margin-top: 10px;
  }
`;

const Rating = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 5px;
`;

const Button = styled.button`
  width: 300px;
  align-self: center;
  background-color: #f0c14b;
  border: none;
  color: black;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-family);
  cursor: pointer;
`;

export default Product;
