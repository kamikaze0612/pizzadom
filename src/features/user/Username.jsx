import styled from "styled-components";

import { HiUserCircle } from "react-icons/hi2";
import { IconContext } from "react-icons";
/* eslint-disable react/prop-types */
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledUsername = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

function Username({ username }) {
  return (
    <StyledDiv>
      <IconContext.Provider
        value={{ color: "var(--color-red-700)", size: "32px" }}
      >
        <HiUserCircle />
      </IconContext.Provider>
      <StyledUsername>{username}</StyledUsername>
    </StyledDiv>
  );
}

export default Username;
