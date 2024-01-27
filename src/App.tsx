import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { SpeedInsights } from "@vercel/speed-insights/next";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <SpeedInsights />
    </QueryClientProvider>
  );
}
