import type User from "@/app/models/user";
import { httpClient } from "@/shared/api/httpClient";

import type { LoginResponseType } from "../types/responses";

export async function getCurrentUser(): Promise<User> {
  const { data } = await httpClient.get<User>(
    `${import.meta.env.VITE_API_URL}/api/user/me`,
    {
      withCredentials: true,
    },
  );

  return data;
}

export async function loginRequest(
  email: string,
  password: string,
): Promise<LoginResponseType> {
  const { data } = await httpClient.post<LoginResponseType>(
    `${import.meta.env.VITE_API_URL}/api/user/login`,
    {
      email,
      password,
    },
  );

  return data;
}
