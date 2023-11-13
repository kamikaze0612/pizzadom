import toast from "react-hot-toast";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error("Failed getting menu");
  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order F#${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    console.log(newOrder);
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!res.ok) {
      toast.error("Could not place order");
      throw new Error("Creating order has failed😞");
    }
    const { data } = await res.json();
    toast.success("Order placed");
    return data;
  } catch (error) {
    throw new Error("Failed creating your order");
  }
}
