import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logoImg from "../../src/img/logo.png";
import Search from "../features/order/Search";
import Username from "../features/user/Username";

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  box-shadow: var(--shadow-sm);
  height: 80px;
  padding: 0 9.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const LogoImg = styled.img`
  width: 3.2rem;
`;

function Header() {
  const { username } = useSelector((state) => state.cart);

  return (
    <StyledHeader>
      <Search />
      <Link
        to="/"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "2.4rem",
          color: "var(--color-red-800)",
          fontWeight: "500",
        }}
      >
        <LogoImg src={logoImg} alt="Logo of pizzadom" />
        Pizzadom
      </Link>
      {username && <Username username={username} />}
    </StyledHeader>
  );
}

export default Header;
