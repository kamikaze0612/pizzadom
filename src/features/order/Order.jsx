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

const StyledOrder = styled.div`
  max-width: 100rem;
  margin: 4.8rem auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const OrderHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const BoldText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
`;

const SmallText = styled.p`
  font-size: 1.6rem;
`;

const Price = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Roboto Mono", sans-serif;
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

  return fetcher.state === "loading" ? (
    <Loader />
  ) : (
    <StyledOrder>
      <FlexRow>
        <OrderHeading>Order #{id} status</OrderHeading>
        <StatusTag>
          {status === "preparing" ? "Preparing order" : "Delivered"}
        </StatusTag>
      </FlexRow>
      <FlexRow
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
      </FlexRow>
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
      <FlexRow
        style={{
          backgroundColor: "var(--color-grey-100)",
          padding: "1.6rem 2.4rem",
        }}
      >
        <BoldText>Total price:</BoldText>
        <Price>{formatCurrency(orderPrice + 10)}</Price>
      </FlexRow>
    </StyledOrder>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
