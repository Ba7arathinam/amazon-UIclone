import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);
  // const [state, dispatch ] = useStateValue() like this
  return (
    <Navbar>
      <Link to='/'>
        <Logo
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt='Amazon'
        />
      </Link>

      <InputBar>
        <Input type='text' placeholder='Search Your Item...' />
        <Icon />
      </InputBar>

      <MenuBar>
        <Link className='headerLink' to='/login'>
          <MenuLists>
            <span>Hello Marudhu</span>
            <span>SignIn</span>
          </MenuLists>
        </Link>

        <Link className='headerLink' to='/login'>
          <MenuLists>
            <span>& Returns</span>
            <span>Order</span>
          </MenuLists>
        </Link>

        <Link className='headerLink' to='/login'>
          <MenuLists>
            <span>Your</span>
            <span>Prime</span>
          </MenuLists>
        </Link>

        <Link className='headerLink' to='/checkout'>
          <BasketIcon>
            <Basket />
            <span>{basket?.length}</span>
          </BasketIcon>
        </Link>
      </MenuBar>
    </Navbar>
  );
};

const Navbar = styled.div`
  background-color: #131921;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 100px;
  margin: 18px 20px 0px 20px;
`;

const InputBar = styled.div`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border-right: 1px solid green;

  &:focus {
    outline: none;
  }
`;

const Icon = styled(SearchIcon)`
  background-color: #cd9042;
  height: 22px !important;
  padding: 5px;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: var(--font-family);
  font-weight: 500;

  span:first-child {
    color: lightblue;
    font-size: 12px;
  }

  .headerLink {
    color: white;
    text-decoration: none;
  }
`;

const MenuLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`;

const BasketIcon = styled.div`
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;

  span {
    margin-left: 5px;
  }
`;

const Basket = styled(ShoppingBasketIcon)``;

export default Header;
