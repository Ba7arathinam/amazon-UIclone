import React from "react";
import styled from "styled-components";
import Product from "./Product";
import p1 from "./images/product1.jpg";
import p2 from "./images/product2.jpg";
import p3 from "./images/product3.jpg";
import p4 from "./images/product4.jpg";
import p5 from "./images/product5.jpg";
import p6 from "./images/product6.jpg";
import p7 from "./images/product7.jpg";
import p9 from "./images/product10.jpg";

export const Homepage = () => {
  return (
    <Main>
      <img
        className="homeImage"
        src="https://m.media-amazon.com/images/I/817akQ-Qq+L._SX3000_.jpg"
        alt=""
      />
      <TotalProduct>
        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p1}
        />

        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p3}
        />
      </TotalProduct>

      <TotalProduct>
        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p2}
        />

        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p4}
        />

        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p5}
        />
      </TotalProduct>

      <TotalProduct>
        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p6}
        />

        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p7}
        />

        <Product
          id="999999"
          title="Marudhupandiyan Ready To Flying Dubai"
          price={99.9}
          rating={5}
          image={p9}
        />
      </TotalProduct>
    </Main>
  );
};

const Main = styled.div`
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  .homeImage {
    width: 100%;
    margin-bottom: -150px;
    z-index: -1;
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
`;
const TotalProduct = styled.div`
  display: flex;
  flex: 1;
  margin-left: 7px;
  margin-right: 7px;
`;

export default Homepage;
