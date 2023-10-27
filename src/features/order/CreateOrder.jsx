import { useSelector } from "react-redux";
import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

const Form = styled.form`
  padding: 4.8rem;
  max-width: 128rem;
  margin: 4.8rem auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 96rem;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 500;
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

function CreateOrder() {
  const username = useSelector((state) => state.cart.username);
  const cart = useSelector((state) => state.cart.cart);
  const isEmpty = cart.length === 0;

  return isEmpty ? (
    <ErrorText>
      There is no pizza to order😢. Please go back to menu and start ordering
    </ErrorText>
  ) : (
    <Form>
      <Header>Ready to order? Let&apos;s go!</Header>
      <FormRow>
        <Label>First Name</Label>
        <TextInput
          type="text"
          placeholder="Enter your first name"
          defaultValue={username}
        />
      </FormRow>
      <FormRow>
        <Label>Phone number</Label>
        <TextInput type="text" placeholder="Enter phone number" />
      </FormRow>
      <FormRow>
        <Label>Address</Label>
        <TextInput type="text" placeholder="Enter your address to deliver" />
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
