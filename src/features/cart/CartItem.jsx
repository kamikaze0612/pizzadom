/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
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

  @media only screen and (max-width: 75em) {
    width: 9rem;
    height: 9rem;
  }
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

  @media only screen and (max-width: 75em) {
    font-size: 2rem;
  }
`;

const Ingredients = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-500);

  @media only screen and (max-width: 75em) {
    font-size: 1.4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  margin-left: auto;

  @media only screen and (max-width: 75em) {
    gap: 2.4rem;
  }
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

  @media only screen and (max-width: 75em) {
    font-size: 2rem;
  }
`;

function CartItem({ pizza }) {
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.cart.pizzas);

  const currentPizza =
    pizzas && pizzas.find((pizzaItem) => pizza.pizzaId === pizzaItem.id);

  return (
    <StyledCartItem>
      <PizzaImg src={currentPizza.imageUrl} />
      <PizzaDetails>
        <Name>{pizza.name}</Name>
        <Ingredients>{currentPizza.ingredients.join(", ")}</Ingredients>
      </PizzaDetails>
      <Buttons>
        <Price>{formatCurrency(pizza.totalPrice)}</Price>
        <QuantityBox>
          <Button onClick={() => dispatch(decrementQuantity(pizza.pizzaId))}>
            -
          </Button>
          <span>{pizza.quantity}</span>
          <Button onClick={() => dispatch(increaseQuantity(pizza.pizzaId))}>
            +
          </Button>
        </QuantityBox>
        <Button
          onClick={() => dispatch(deleteItem(pizza.pizzaId))}
          size="medium"
        >
          Remove
        </Button>
      </Buttons>
    </StyledCartItem>
  );
}

export default CartItem;
