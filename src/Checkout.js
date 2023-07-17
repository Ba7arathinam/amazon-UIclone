import React from 'react';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <Checkouts>
      <CheckOutRight>
        <Advertisement
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Venku/5_01.jpg'
          alt='Add'
        />

        {basket?.length === 0 ? (
          <BasketEmpty>
            <h1>Your Basket Empty.....</h1>
            <p>
              You have no items in your basket. To buy one or "Add To Basket"
              next to the item
            </p>
          </BasketEmpty>
        ) : (
          <BasketFull>
            <h1>Your Shopping Items Here...</h1>
          </BasketFull>
        )}

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </CheckOutRight>
      {basket.length > 0 && (
        <SubTotals>
          <Subtotal />
        </SubTotals>
      )}
    </Checkouts>
  );
};

const Checkouts = styled.div`
  display: flex;
  padding: 20px;
  height: max-content;
`;

const CheckOutRight = styled.div``;

const Advertisement = styled.img`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const BasketEmpty = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid orange;
`;

const BasketFull = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid orange;
`;

const SubTotals = styled.div``;

export default Checkout;
