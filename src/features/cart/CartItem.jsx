/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteItem, increaseQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2.4rem 3.2rem;
  width: 100%;
`;

const PizzaImg = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: var(--border-radius-md);
  object-fit: cover;
  object-position: center;
`;

const PizzaDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 1.6rem;
`;

const Name = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
`;

const Ingredients = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-500);
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-left: auto;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Price = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  font-family: "Roboto Mono", sans-serif;
`;

function CartItem({ pizza }) {
  const dispatch = useDispatch();

  return (
    <StyledCartItem>
      <PizzaImg src={pizza.imageUrl} />
      <PizzaDetails>
        <Name>{pizza.name}</Name>
        <Ingredients>{pizza.ingredients.join(", ")}</Ingredients>
      </PizzaDetails>
      <Buttons>
        <Price>{formatCurrency(pizza.quantity * pizza.unitPrice)}</Price>
        <QuantityBox>
          <Button onClick={() => dispatch(decrementQuantity(pizza.id))}>
            -
          </Button>
          <span>{pizza.quantity}</span>
          <Button onClick={() => dispatch(increaseQuantity(pizza.id))}>
            +
          </Button>
        </QuantityBox>
        <Button onClick={() => dispatch(deleteItem(pizza.id))} size="medium">
          Remove
        </Button>
      </Buttons>
    </StyledCartItem>
  );
}

export default CartItem;
