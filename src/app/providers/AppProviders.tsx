import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "@/shared/components/Footer";
import { Header } from "@/shared/components/Header";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen">
        <Header />
        <main>
          <BrowserRouter>{children}</BrowserRouter>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
