/* eslint-disable react/prop-types */
import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrementQuantity,
  deleteItem,
  increaseQuantity,
} from "../cart/cartSlice";

const StyledMenuItem = styled.li`
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
`;

const PizzaImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;

  @media only screen and (max-width: 75em) {
    height: 16rem;
  }
`;

const PizzaTextBox = styled.div`
  padding: 1.2rem 2.4rem 2.4rem 2.4rem;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 75em) {
    padding: 1.2rem 1.6rem 1.6rem 1.6rem;
  }
`;

const PizzaName = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;

  @media only screen and (max-width: 75em) {
    font-size: 1.8rem;
  }
`;

const PizzaIngredients = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
  margin-top: 0.8rem;
  margin-bottom: 1.2rem;
  font-style: italic;

  @media only screen and (max-width: 75em) {
    font-size: 1.2rem;
  }
`;

const PizzaPrice = styled.span`
  font-size: 2.2rem;
  margin-top: auto;
  margin-bottom: 1.6rem;
  color: var(--color-grey-800);
  font-family: "Roboto Mono", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 75em) {
    font-size: 1.8rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;

const QuantityBox = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, imageUrl } = pizza;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const addedPizza = cart.find((pizzaItem) => pizzaItem.pizzaId === id);

  function handleAddItem() {
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice: +unitPrice,
      quantity: 1,
      totalPrice: +unitPrice,
    };
    dispatch(addItem(newPizza));
  }

  return (
    <StyledMenuItem>
      <PizzaImage src={imageUrl} />
      <PizzaTextBox>
        <PizzaName>{name}</PizzaName>
        <PizzaIngredients>
          <span
            style={{
              fontWeight: "600",
              color: "var(--color-grey-500)",
              marginRight: "4px",
              fontStyle: "normal",
            }}
          >
            Ingredients:
          </span>{" "}
          {ingredients.join(", ")}
        </PizzaIngredients>
        <PizzaPrice>{formatCurrency(unitPrice)}</PizzaPrice>
        {!addedPizza && (
          <Button onClick={handleAddItem} size="medium">
            + Add to cart
          </Button>
        )}
        {addedPizza && (
          <Buttons>
            <QuantityBox>
              <Button onClick={() => dispatch(decrementQuantity(id))}>-</Button>
              <span>{addedPizza.quantity}</span>
              <Button onClick={() => dispatch(increaseQuantity(id))}>+</Button>
            </QuantityBox>
            <Button onClick={() => dispatch(deleteItem(id))} size="medium">
              Remove
            </Button>
          </Buttons>
        )}
      </PizzaTextBox>
    </StyledMenuItem>
  );
}

export default MenuItem;
