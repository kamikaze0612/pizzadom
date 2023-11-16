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

  @media only screen and (max-width: 75em) {
    padding: 3.2rem 9.6rem 1.6rem 9.6rem;
  }

  @media only screen and (max-width: 75em) {
    padding: 3.2rem 4.8rem 1.6rem 4.8rem;
  }

  @media only screen and (max-width: 48em) {
    padding: 2.4rem 3.2rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  gap: 19.2rem;
  align-items: start;

  @media only screen and (max-width: 75em) {
    gap: 12.8rem;
  }

  @media only screen and (max-width: 48em) {
    gap: 0;
    justify-content: space-between;
  }

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    gap: 3.2rem;
  }
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

  @media only screen and (max-width: 75em) {
    width: 5rem;
  }

  @media only screen and (max-width: 48em) {
    width: 3rem;
  }
`;

const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;

  @media only screen and (max-width: 75em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 48em) {
    font-size: 1.6rem;
  }
`;

const ListLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.8rem;
    color: var(--color-grey-500);

    @media only screen and (max-width: 75em) {
      font-size: 1.4rem;
    }
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

  @media only screen and (max-width: 75em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 27em) {
    font-size: 1.2rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 3.6rem;
  align-self: center;
  color: var(--color-red-800);
  font-weight: 600;

  @media only screen and (max-width: 27em) {
    align-self: start;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <StyledLink>
          <FooterImg src={logoImg} alt="Logo of pizzadom" />
          Pizzadom
        </StyledLink>
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
