/* eslint-disable react/prop-types */
import styled from "styled-components";
import Container from "../../ui/Container";
import MenuItem from "./MenuItem";

const StyledMenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.8rem;
  padding-bottom: 6.4rem;

  @media only screen and (max-width: 90em) {
    gap: 3.2rem;
    padding: 3.2rem;
    padding-top: 0;
    padding-bottom: 4.8rem;
  }
`;

const Heading = styled.h2`
  font-size: 3.6rem;
  padding: 4.8rem 0 3.2rem 0;

  @media only screen and (max-width: 90em) {
    padding-left: 3.2rem;
  }

  @media only screen and (max-width: 75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 64em) {
    font-size: 2.4rem;
    padding: 2.4rem 0;
    padding-left: 3.2rem;
  }
`;

function MenuList({ pizzas }) {
  return (
    <Container>
      <Heading>Menu</Heading>
      <StyledMenuList>
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </StyledMenuList>
    </Container>
  );
}

export default MenuList;
