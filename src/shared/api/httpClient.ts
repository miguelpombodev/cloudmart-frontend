import { create } from "axios";

export const httpClient = create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const getRefreshToken = () => {
  return {
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem("refreshToken", refreshToken);
};

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response?.status === 401 &&
      !originalRequest?._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        try {
          const { data } = await httpClient.post("refresh");
          setRefreshToken(data.refreshToken);

          return httpClient(originalRequest);
        } catch (refreshError) {
          localStorage.clear();
          window.location.href = "/customer/login";
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);
