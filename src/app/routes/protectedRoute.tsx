import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthStore } from "@/features/auth/store/auth.store";

interface ProtectedRouteProps {
  roles?: string[];
  redirectTo?: string;
}

export default function ProtectedRoute({
  redirectTo = "/customer/login",
}: ProtectedRouteProps) {
  const { user } = useAuthStore();
  const location = useLocation();

  if (!user) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <Outlet />;
}
