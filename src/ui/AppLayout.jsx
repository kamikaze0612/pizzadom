import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const App = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
  flex-direction: column;
`;

const Main = styled.main`
  margin-top: 80px;
`;

const LoaderContainer = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  backdrop-filter: blur(3px);
  align-items: center;
  justify-content: center;
`;

function AppLayout() {
  const navigation = useNavigation();

  return (
    <App>
      <Header />
      <Main>
        {navigation.state === "loading" ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <Outlet />
        )}
      </Main>
      <Footer />
      <CartOverview />
    </App>
  );
}

export default AppLayout;
