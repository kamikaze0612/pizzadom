/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";

const StyledSearch = styled.input`
  padding: 8px 1.6rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  border-radius: 100px;
  border: 2px solid var(--color-red-700);

  &::placeholder {
    color: var(--color-grey-400);
  }
`;

const StyledDiv = styled.form`
  display: flex;
  gap: 6px;

  @media only screen and (max-width: 48em) {
    position: absolute;
    top: 84px;
    border-radius: var(--border-radius-sm);
    padding: 0.8rem;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: var(--shadow-md);
    display: ${(props) => (props.display ? "flex" : "none")};
  }

  @media only screen and (max-width: 27em) {
    width: 100vw;
  }
`;

function Search({ showSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();

    if (!query) return;
    navigate(`/searchOrder/${query}`);
    setQuery("");
  };

  return (
    <StyledDiv display={showSearch} onSubmit={handleSubmit}>
      <StyledSearch
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order ID"
      />
      <Button size="small">Search</Button>
    </StyledDiv>
  );
}

export default Search;
