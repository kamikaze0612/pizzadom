import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helpers";

const CartContainer = styled.div`
  padding: 6.4rem 9.6rem;

  @media only screen and (max-width: 90em) {
    padding: 4.8rem 6.4rem;
  }

  @media only screen and (max-width: 48em) {
    padding: 4.8rem 3.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.8rem;

  @media only screen and (max-width: 90em) {
    margin-bottom: 3.2rem;
  }
`;

const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 4.8rem;
  row-gap: 3.2rem;

  @media only screen and (max-width: 90em) {
    column-gap: 3.2rem;
  }

  @media only screen and (max-width: 37.5em) {
    column-gap: 0;
  }
`;

const CartItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media only screen and (max-width: 75em) {
    gap: 1.2rem;
  }

  @media only screen and (max-width: 64em) {
    grid-column: 1 / -1;
  }
`;

const PriceBox = styled.div`
  width: 480px;
  padding: 3.2rem;
  box-shadow: var(--shadow-md);
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media only screen and (max-width: 90em) {
    padding: 2.4rem;
    max-width: 360px;
  }

  @media only screen and (max-width: 64em) {
    justify-self: center;
    width: 100%;
  }
`;

const H2 = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;

  @media only screen and (max-width: 90em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    font-size: 1.8rem;
  }
`;

const PriceRow = styled.p`
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-800);

  @media only screen and (max-width: 90em) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 75em) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.span`
  font-weight: 400;
  color: var(--color-grey-500);
  font-size: 2.2rem;

  @media only screen and (max-width: 75em) {
    font-size: 1.6rem;
  }
`;

const Line = styled.span`
  width: 100%;
  border-bottom: 2px solid var(--color-grey-100);
  margin: 1.2rem 0;
`;

const EmptyText = styled.p`
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-red-700);

  @media only screen and (max-width: 56.25em) {
    font-size: 2.4rem;
  }
`;

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const isEmpty = cart.length === 0;

  const totalPrice = cart.reduce(
    (totalPrice, pizza) => (totalPrice += pizza.quantity * pizza.unitPrice),
    0
  );

  return (
    <CartContainer>
      <Buttons>
        <span style={{ display: "flex", gap: "2.4rem", alignItems: "center" }}>
          <Button onClick={() => navigate(-1)} variation="secondary">
            &larr; Back
          </Button>
          <H2>Your cart</H2>
        </span>
        <Button onClick={() => navigate("/main/menu")} size="medium">
          + Add more pizzas
        </Button>
      </Buttons>
      {isEmpty && (
        <EmptyText>Please go back and select pizzas from menu 😊</EmptyText>
      )}
      {!isEmpty && (
        <GridContainer>
          <CartItemBox>
            {cart.map((pizzaItem) => (
              <CartItem pizza={pizzaItem} key={pizzaItem.pizzaId} />
            ))}
          </CartItemBox>
          <PriceBox>
            <PriceRow>
              <Paragraph>Pizzas</Paragraph>
              <span style={{ fontFamily: '"Roboto Mono", sans-serif' }}>
                {formatCurrency(totalPrice)}
              </span>
            </PriceRow>
            <PriceRow>
              <Paragraph>Delivery Fee</Paragraph>
              <span style={{ fontFamily: "Roboto Mono, sans-serif" }}>
                {formatCurrency(10)}
              </span>
            </PriceRow>
            <Line></Line>
            <PriceRow>
              <span>Total</span>
              <span
                style={{
                  color: "var(--color-red-800)",
                  fontFamily: "'Roboto Mono', sans-serif",
                }}
              >
                {formatCurrency(totalPrice + 10)}
              </span>
            </PriceRow>
            <Button
              onClick={() => navigate("/main/order/new")}
              disabled={isEmpty}
              size="large"
            >
              Order
            </Button>
          </PriceBox>
        </GridContainer>
      )}
    </CartContainer>
  );
}

export default Cart;
