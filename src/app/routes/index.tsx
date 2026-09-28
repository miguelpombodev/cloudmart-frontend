import { Route, Routes } from "react-router-dom";

import ProductPage from "@/features/product/pages/ProductPage";

import { LoginPage } from "../../features/auth/pages/LoginPage";
import { HomePage } from "../../features/home/pages/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:name" element={<ProductPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
