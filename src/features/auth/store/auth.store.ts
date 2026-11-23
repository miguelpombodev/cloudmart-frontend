import { create } from "zustand";

import type User from "@/app/models/user";

import { getCurrentUser, loginRequest } from "../api";
import type { LoginCredentials } from "../types/requests";

type AuthStatus = "loading" | "authenticated" | "unauthenticated";

interface AuthState {
  user: User | null;
  status: AuthStatus;
  initialized: () => Promise<void>;
  login: (credentials: LoginCredentials) => Promise<void>;
  // logout: () => Promise<void>;
}

let initPromise: Promise<void> | null = null;

const toState = (user: User | null) => ({
  user,
  status: (user ? "authenticated" : "unauthenticated") as AuthStatus,
});

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "loading",
  initialized: () => {
    initPromise ??= getCurrentUser()
      .then((user) => set(toState(user)))
      .catch(() => set(toState(null)));
    return initPromise;
  },

  login: async ({ email, password }) => {
    await loginRequest(email, password);
    set(toState(await getCurrentUser()));
  },

  // logout: ()
}));
