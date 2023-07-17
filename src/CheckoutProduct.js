import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <CheckoutProducts>
      <CheckoutImage src={image} />

      <CheckoutProductInfo>
        <p className="title">{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating>
          {Array(rating)
            .fill()
            .map((_) => (
              <p>M</p>
            ))}
        </Rating>
        <Button onClick={removeFromBasket}>Remove Item</Button>
      </CheckoutProductInfo>
    </CheckoutProducts>
  );
};

const CheckoutProducts = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const CheckoutImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

const CheckoutProductInfo = styled.div`
  padding-left: 20px;

  .title {
    font-size: 18px;
    font-weight: 700;
    font-family: var(--font-family);
  }
`;

const Rating = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #f0c14b;
  border: none;
  margin-top: 20x;
  color: #111;
  padding: 3px;
  cursor: pointer;
`;

export default CheckoutProduct;
