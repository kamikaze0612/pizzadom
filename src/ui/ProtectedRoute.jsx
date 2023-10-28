import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const username = useSelector((state) => state.cart.username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) navigate("/");
  }, [navigate, username]);
  return <div>{children}</div>;
}

export default ProtectedRoute;
