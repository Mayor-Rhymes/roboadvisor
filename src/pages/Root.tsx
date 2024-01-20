import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function Root(){

    return (
        <div>
            <Navbar />

            <Outlet />
            

            <Toaster />
        </div>
    )
}