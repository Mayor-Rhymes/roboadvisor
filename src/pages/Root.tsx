import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';

export default function Root() {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Toaster />
      <Analytics />
    </div>
  );
}
