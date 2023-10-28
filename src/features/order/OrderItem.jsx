/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const StyledOrderItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.2rem;
`;

const PizzaImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: var(--border-radius-md);
  object-fit: cover;
  object-position: center;
`;

const PizzaDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

const Ingredients = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-500);
`;

const QuantityBox = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
`;

const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Roboto Mono", sans-serif;
`;

function OrderItem({ pizza, imageUrl, ingredients }) {
  return (
    <StyledOrderItem>
      <PizzaImg src={imageUrl} alt={pizza.name} />
      <div>
        <PizzaDetails>
          <div style={{ display: "flex", gap: ".6rem" }}>
            <QuantityBox>{pizza.quantity} &times;</QuantityBox>
            <Name>{pizza.name}</Name>
          </div>
          <Price>{formatCurrency(pizza.totalPrice)}</Price>
        </PizzaDetails>

        <Ingredients>{ingredients.join(", ")}</Ingredients>
      </div>
    </StyledOrderItem>
  );
}

export default OrderItem;
