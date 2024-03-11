import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ProductsContextProvider } from "../../ContextApis/ProductsContext";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ProductsContextProvider>
          <Outlet />
        </ProductsContextProvider>
      </div>
    </>
  );
}
