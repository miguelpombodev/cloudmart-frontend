import { useQueryClient, useMutation } from "@tanstack/react-query";

import { loginRequest, getCurrentUser } from "../api";
import type { LoginCredentials } from "../types/requests";

import { AUTH_KEY } from "./useCurrentUser";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      loginRequest(email, password),

    // A resposta do login traz tokens: não vai para o cache. O usuário vem do /me.
    // Não use invalidateQueries aqui: ele só refaz queries com observers ativos, e a
    // LoginPage não observa AUTH_KEY. fetchQuery busca de verdade e é aguardado, então
    // `await login(...)` só resolve com o usuário já no cache.
    onSuccess: () =>
      queryClient.fetchQuery({
        queryKey: AUTH_KEY,
        queryFn: getCurrentUser,
        staleTime: 0,
      }),
  });
}
