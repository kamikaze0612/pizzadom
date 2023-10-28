import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helpers";

const CartContainer = styled.div`
  padding: 6.4rem 9.6rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.8rem;
`;

const GridContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 4.8rem;
`;

const CartItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const PriceBox = styled.div`
  width: 480px;
  padding: 3.2rem;
  box-shadow: var(--shadow-md);
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const H2 = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
`;

const PriceRow = styled.p`
  font-size: 3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-800);
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
        <span style={{ display: "flex", gap: "3.2rem", alignItems: "center" }}>
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
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  color: "var(--color-grey-500)",
                }}
              >
                Pizzas
              </span>
              <span style={{ fontFamily: '"Roboto Mono", sans-serif' }}>
                {formatCurrency(totalPrice)}
              </span>
            </PriceRow>
            <PriceRow>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  color: "var(--color-grey-500)",
                }}
              >
                Delivery Fee
              </span>
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
