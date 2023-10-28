import styled from "styled-components";

const StyledLoader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid var(--color-grey-300);
  border-right-color: crimson;
  animation: s2 1s infinite linear;

  @keyframes s2 {
    to {
      transform: rotate(1turn);
    }
  }
`;

const LoaderContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  backdrop-filter: blur(3px);
  align-items: center;
  justify-content: center;
`;

function Loader() {
  return (
    <LoaderContainer>
      <StyledLoader></StyledLoader>
    </LoaderContainer>
  );
}

export default Loader;
