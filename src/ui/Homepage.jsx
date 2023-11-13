import styled from "styled-components";

import Header from "./Header";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  background-color: var(--color-grey-100);
  height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 62px;

  @media only screen and (max-width: 75em) {
    font-size: 52px;
  }
`;

const H2 = styled.h2`
  font-size: 52px;
  color: var(--color-red-700);
  font-weight: 500;

  @media only screen and (max-width: 75em) {
    font-size: 36px;
  }
`;

const P = styled.p`
  margin-top: 2.4rem;
  font-size: 2.4rem;
`;

const Input = styled.input`
  padding: 1.2rem 3.2rem;
  width: 320px;
  border-radius: 150px;
  display: block;
  margin: 3.2rem 0;
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-red-700);
  }
`;

function Homepage() {
  const [nameIsValid, setNameIsValid] = useState(true);
  const [username, setUsername] = useState("");
  const { username: name } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (username.length > 2) setNameIsValid(false);
    if (name) {
      setNameIsValid(false);
      setUsername(name);
    }
    if (!username) setNameIsValid(true);
  }, [username, name]);

  function handleClick(e) {
    e.preventDefault();
    if (!username) return;

    dispatch(updateName(username));
    navigate("/main");
  }

  return (
    <>
      <Header />
      <Main>
        <Form onSubmit={handleClick}>
          <H1>The best pizzas.</H1>
          <H2>Just out of oven, straight to your place</H2>
          <P>Hello, start by telling us your name:</P>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name..."
          />
          <Button disabled={nameIsValid} size="medium">
            Start ordering
          </Button>
        </Form>
      </Main>
    </>
  );
}

export default Homepage;
