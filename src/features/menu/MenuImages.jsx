import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import pizza1 from "../../../src/img/pizza-1.jpg";
import pizza2 from "../../../src/img/pizza-2.jpg";
import pizza3 from "../../../src/img/pizza-3.jpg";

const positions = {
  0: css`
    transform: translateX(0);
  `,
  1: css`
    transform: translateX(-100vw);
  `,
  2: css`
    transform: translateX(-200vw);
  `,
};

const Container = styled.div`
  display: flex;
  position: relative;
  transition: transform 0.8s;
  transform: translateX(0);

  ${(props) => positions[props.position]}
`;

const Item = styled.div`
  flex: 0 0 100vw;
  height: 50vh;
  display: flex;
  padding-top: 20vh;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.imgurl});
  background-size: cover;
  background-position: center;
`;

const ItemText = styled.p`
  font-size: 5.2rem;
  font-weight: 500;
  color: var(--color-grey-200);
  text-transform: uppercase;
  letter-spacing: 6px;
`;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center;
//   position: relative;
// `;

function MenuImages() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let timerId = null;

    timerId = setInterval(() => {
      setPosition((cur) => {
        if (cur === 2) {
          return 0;
        } else {
          return ++cur;
        }
      });
    }, 3000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Container position={position}>
      <Item imgurl={pizza1} background="background1">
        <ItemText>Hand-made by experts</ItemText>
      </Item>
      <Item imgurl={pizza2} background="background2">
        <ItemText>Straight from the oven</ItemText>
      </Item>
      <Item imgurl={pizza3} background="background3">
        <ItemText>Tastes you cannot find anywhere</ItemText>
      </Item>
    </Container>
  );
}

export default MenuImages;
