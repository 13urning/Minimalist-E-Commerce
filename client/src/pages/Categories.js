import React from "react";
import CategoriesHeader from "../components/CategoriesHeader/CategoriesHeader";
import { Outlet } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}
