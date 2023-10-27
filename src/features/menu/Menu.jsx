import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuImages from "./MenuImages";
import MenuList from "./MenuList";

function Menu() {
  const pizzas = useLoaderData();

  return (
    <>
      <MenuImages />
      <MenuList pizzas={pizzas.data} />
    </>
  );
}

export const loader = async function () {
  const pizzas = await getMenu();
  return pizzas;
};

export default Menu;
