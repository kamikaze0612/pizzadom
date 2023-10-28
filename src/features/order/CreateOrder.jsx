import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import FormRow from "./FormRow";
import { clearCart } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  padding: 4.8rem;
  max-width: 128rem;
  margin: 4.8rem auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const TextInput = styled.input`
  font-size: 2rem;
  background-color: var(--color-grey-100);
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 100px;

  color: var(--color-grey-800);
  &::placeholder {
    color: var(--color-grey-400);
  }
`;

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-red-700);
  margin-bottom: 2.4rem;
`;

const ErrorText = styled.h2`
  margin-top: 6.4rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-red-700);
  text-align: center;
`;

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const username = useSelector((state) => state.cart.username);
  const cart = useSelector((state) => state.cart.cart);
  const isEmpty = cart.length === 0;
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    async function postNewOrder() {
      const order = {
        ...data,
        priority: false,
        position: "",
        cart,
      };

      const newOrder = await createOrder(order);
      console.log(newOrder);

      store.dispatch(clearCart());
      console.log(data);
      navigate(`/main/order/${newOrder.id}`);
    }
    postNewOrder();
    reset();
  }

  function onError() {
    console.error(errors);
  }

  return isEmpty ? (
    <ErrorText>
      There is no pizza to order😢. Please go back to menu and start ordering
    </ErrorText>
  ) : (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Header>Ready to order? Let&apos;s go!</Header>
      <FormRow label="First name:" error={errors?.customer?.message}>
        <TextInput
          type="text"
          placeholder="Enter your first name"
          name="customer"
          id="customer"
          defaultValue={username}
          {...register("customer", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Phone number:" error={errors?.phone?.message}>
        <TextInput
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter phone number"
          {...register("phone", {
            required: "This field is required",
            validate: (value) =>
              isValidPhone(value) || "Phone number is not valid",
          })}
        />
      </FormRow>
      <FormRow
        label="Address:"
        style={{ marginBottom: "2.4rem" }}
        error={errors?.address?.message}
      >
        <TextInput
          type="text"
          name="address"
          id="address"
          placeholder="Enter your address to deliver"
          {...register("address", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <span style={{ marginTop: "2.4rem", marginLeft: "auto" }}>
        <Button size="large">
          Order now for{" "}
          {formatCurrency(
            cart.reduce(
              (totalPrice, pizza) =>
                (totalPrice += pizza.quantity * pizza.unitPrice),
              0
            )
          )}
        </Button>
      </span>
    </Form>
  );
}

export default CreateOrder;
