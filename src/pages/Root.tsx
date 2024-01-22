import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function Root() {
  return (
    <div>
      <SpeedInsights />
      <Navbar />

      <Outlet />

      <Toaster />
      <Analytics />
    </div>
  );
}
