import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledFormError = styled.div`
  color: var(--color-red-800);
  background-color: var(--color-grey-0);
  padding: 0.6rem 1.6rem;
  grid-column: 2 / -1;
  border-radius: 100px;
`;
function FormError({ children }) {
  return <StyledFormError>{children}</StyledFormError>;
}

export default FormError;
