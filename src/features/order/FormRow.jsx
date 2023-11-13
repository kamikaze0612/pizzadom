/* eslint-disable react/prop-types */
import styled from "styled-components";

import FormError from "./FormError";

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 96rem;
  row-gap: 1.2rem;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 75em) {
    grid-template-columns: 1fr 80rem;
  }

  @media only screen and (max-width: 64em) {
    grid-template-columns: 1fr 70vw;
  }
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 500;

  @media only screen and (max-width: 75em) {
    font-size: 1.8rem;
  }
`;

function FormRow({ children, label, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <FormError>{error}</FormError>}
    </StyledFormRow>
  );
}

export default FormRow;
