import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Circle = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  box-shadow: var(--shadow-md);
  position: fixed;
  right: 5vh;
  bottom: 5vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-0);
`;

const Quantity = styled.span`
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.4rem;
  border-radius: 50%;
  background-color: var(--color-red-700);
  color: var(--color-grey-0);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -6px;
  bottom: -6px;
`;

function CartOverview() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  let quantity = 0;

  if (cart.length === 0) quantity = 0;
  else {
    quantity = cart.reduce(
      (quantity, pizza) => (quantity += pizza.quantity),
      0
    );
  }

  return (
    <Circle onClick={() => navigate("cart")}>
      <FiShoppingCart />
      <Quantity>{quantity}</Quantity>
    </Circle>
  );
}

export default CartOverview;
