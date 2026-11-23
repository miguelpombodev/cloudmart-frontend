import { Navigate, Route, Routes } from "react-router-dom";

import AccountPage from "@/features/auth/pages/AccountPage";
import { CreateAccountPage } from "@/features/auth/pages/CreateAccountPage";
import ProductPage from "@/features/product/pages/ProductPage";
import ShowcasePage from "@/features/showcase/pages/ShowCasePage";

import { LoginPage } from "../../features/auth/pages/LoginPage";
import { HomePage } from "../../features/home/pages/HomePage";

import ProtectedRoute from "./protectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/customer">
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="create" element={<CreateAccountPage />} />
      </Route>
      <Route path="/products">
        <Route index element={<ShowcasePage />} />
        <Route path=":sku" element={<ProductPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<AccountPage />} />
      </Route>
    </Routes>
  );
}
