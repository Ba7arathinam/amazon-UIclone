import React from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <SubTotals>
      <h1>SubTotal</h1>
      <CurrencyFormat
        renderText={(value) => (
          <div className="total">
            <p>
              SubTotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subTotalGift">
              <input type="checkbox" /> This Order Contains A Gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button>Proceed To Order..</Button>
    </SubTotals>
  );
};

const SubTotals = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 150px;
  padding: 20px;
  margin-left: 10px;
  background-color: whitesmoke;

  h1 {
    margin-left: 10px;
    font-family: var(--font-family);
  }

  .total {
    margin-left: 10px;
    font-family: var(--font-family);
  }
`;

const Button = styled.button`
  background-color: #f0c14b;
  border: none;
  color: black;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-family);
  cursor: pointer;
  margin-top: 15px;
`;

export default Subtotal;
