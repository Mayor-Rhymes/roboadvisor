import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
