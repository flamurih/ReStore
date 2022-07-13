import { ComponentType } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import Login from "../../features/account/Login";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { useAppSelector } from "../store/configureStore";


export default function PrivateRoute() {
  const { user } = useAppSelector((state) => state.account);
  return (
    <Routes>
      {user ? (
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      ) : (
        <Route path="/login" element={<Login />}></Route>
      )}
    </Routes>
  );
}
