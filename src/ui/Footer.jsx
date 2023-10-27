import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import logoImg from "../../src/img/logo.png";
import { IconContext } from "react-icons";

const StyledFooter = styled.footer`
  padding: 3.2rem 12.8rem 1.6rem 12.8rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-0);
`;

const FooterContent = styled.div`
  display: flex;
  gap: 19.2rem;
  align-items: start;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FooterRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const FooterImg = styled.img`
  width: 6rem;
`;

const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ListLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.8rem;
    color: var(--color-grey-500);
  }

  &:active,
  &:hover {
    color: var(--color-grey-400);
  }
`;

const Author = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: var(--color-grey-400);
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <Link
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
            fontSize: "3.6rem",
            alignSelf: "center",
            color: "var(--color-red-800)",
            fontWeight: "600",
          }}
        >
          <FooterImg src={logoImg} alt="Logo of pizzadom" />
          Pizzadom
        </Link>
        <FooterColumn>
          <H3>About us</H3>
          <StyledList>
            <li>
              <ListLink href="#">Company</ListLink>
            </li>
            <li>
              <ListLink href="#">Resources</ListLink>
            </li>
            <li>
              <ListLink href="#">Careers</ListLink>
            </li>
            <li>
              <ListLink href="#">Privacy & Policy</ListLink>
            </li>
          </StyledList>
        </FooterColumn>
        <FooterColumn>
          <H3>Contact</H3>
          <FooterRow>
            <IconContext.Provider
              value={{
                color: "var(--color-grey-900)",
                size: "40px",
                style: {},
              }}
            >
              <ListLink href="#">
                <FaFacebookSquare />
              </ListLink>
              <ListLink href="#">
                <FaInstagramSquare />
              </ListLink>
              <ListLink href="#">
                <FaYoutubeSquare />
              </ListLink>
            </IconContext.Provider>
          </FooterRow>
        </FooterColumn>
      </FooterContent>
      <Author>
        &copy; 2023 All rights reserved. Coded by{" "}
        <a
          href="https://kamikaze0612.github.io/"
          style={{ fontWeight: "500", color: "var(--color-grey-600)" }}
        >
          Buyantogtokh B.
        </a>
      </Author>
    </StyledFooter>
  );
}

export default Footer;
