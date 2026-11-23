import { useQuery } from "@tanstack/react-query";

import type User from "@/app/models/user";

import { getCurrentUser } from "../api";

export const AUTH_KEY = ["auth", "me"] as const;

export function useCurrentUser() {
  const { data: user = null, isPending } = useQuery<User | null>({
    queryKey: AUTH_KEY,
    queryFn: getCurrentUser,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });

  return { user, isLoading: isPending, isAuthenticated: user !== null };
}
