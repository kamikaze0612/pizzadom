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
`;

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = function (event) {
    event.preventDefault();

    if (!query) return;
    navigate(`/searchOrder/${query}`);
    setQuery("");
  };

  return (
    <StyledDiv onSubmit={handleSubmit}>
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
