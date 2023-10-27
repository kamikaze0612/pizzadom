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

const StyledDiv = styled.div`
  display: flex;
  gap: 6px;
`;

function Search() {
  return (
    <StyledDiv>
      <StyledSearch placeholder="Search order ID" />
      <Button size="small">Search</Button>
    </StyledDiv>
  );
}

export default Search;
