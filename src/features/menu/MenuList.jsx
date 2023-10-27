/* eslint-disable react/prop-types */
import styled from "styled-components";
import Container from "../../ui/Container";
import MenuItem from "./MenuItem";

const StyledMenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.8rem;
  padding-bottom: 6.4rem;
`;

const H2 = styled.h2`
  font-size: 3.6rem;
  padding: 4.8rem 0 3.2rem 0;
`;

function MenuList({ pizzas }) {
  return (
    <Container>
      <H2>Menu</H2>
      <StyledMenuList>
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </StyledMenuList>
    </Container>
  );
}

export default MenuList;
