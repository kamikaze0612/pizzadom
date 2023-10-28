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

function AppLayout() {
  const navigation = useNavigation();

  return (
    <App>
      <Header />
      <Main>{navigation.state === "loading" ? <Loader /> : <Outlet />}</Main>
      <Footer />
      <CartOverview />
    </App>
  );
}

export default AppLayout;
