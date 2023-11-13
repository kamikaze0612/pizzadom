import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import { useEffect } from "react";
import Loader from "../../ui/Loader";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

const OrderContainer = styled.div`
  min-height: 80vh;
  padding-top: 80px;
`;

const StyledOrder = styled.div`
  max-width: 100rem;
  margin: 4.8rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media only screen and (max-width: 64em) {
    max-width: 72rem;
    padding: 0 3.2rem;
  }
`;

const OrderHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  row-gap: 0.8rem;
`;

const FlexColumn = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const StatusTag = styled.span`
  padding: 0.6rem 1.6rem;
  border-radius: 100px;
  color: var(--color-grey-0);
  background-color: #3cc55e;
  text-transform: uppercase;
  justify-self: end;
`;

const BoldText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
`;

const SmallText = styled.p`
  font-size: 1.6rem;
  justify-self: end;
  color: var(--color-grey-500);
`;

const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Roboto Mono", sans-serif;
  justify-self: end;
`;

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/main/menu");
  }, [fetcher]);

  console.log(order);
  const { id, status, estimatedDelivery, cart, orderPrice } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <>
      <Header />
      {fetcher.state === "loading" ? (
        <Loader />
      ) : (
        <OrderContainer>
          <StyledOrder>
            <Row>
              <OrderHeading>Order #{id} status</OrderHeading>
              <StatusTag>
                {status === "preparing" ? "Preparing order" : "Delivered"}
              </StatusTag>
            </Row>
            <Row
              style={{
                backgroundColor: "var(--color-grey-100)",
                padding: "1.6rem 2.4rem",
              }}
            >
              <BoldText>
                {deliveryIn >= 0
                  ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
                  : "Order should have arrived"}
              </BoldText>
              <SmallText>
                (Estimated delivery: {formatDate(estimatedDelivery)})
              </SmallText>
            </Row>
            <FlexColumn>
              {cart.map((pizza) => (
                <OrderItem
                  key={pizza.pizzaId}
                  pizza={pizza}
                  imageUrl={
                    fetcher.data?.data?.find((el) => el.id === pizza.pizzaId)
                      .imageUrl || undefined
                  }
                  ingredients={
                    fetcher.data?.data?.find((el) => el.id === pizza.pizzaId)
                      ?.ingredients ?? []
                  }
                />
              ))}
            </FlexColumn>
            <Row
              style={{
                backgroundColor: "var(--color-grey-100)",
                padding: "1.6rem 2.4rem",
              }}
            >
              <BoldText
                style={{ fontSize: "1.4rem", color: "var(--color-grey-500)" }}
              >
                Delivery fee:
              </BoldText>
              <Price>{formatCurrency(10)}</Price>
              <BoldText>Total price:</BoldText>
              <Price>{formatCurrency(orderPrice + 10)}</Price>
            </Row>
          </StyledOrder>
        </OrderContainer>
      )}
      <Footer />
    </>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
