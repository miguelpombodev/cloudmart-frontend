import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { Header } from "@/shared/components/Header";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <BrowserRouter>{children}</BrowserRouter>
      </main>
    </QueryClientProvider>
  );
}
