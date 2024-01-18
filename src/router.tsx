import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cash from "./pages/Cash";
import Error from "./pages/Error";
import Bond from "./pages/Bond";
import RiskTolerance from "./pages/RiskTolerance";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/login",
                element: <Login />
            },

            {

                path: "/signup",
                element: <Signup />
            },

            {

                path: "/cash",
                element: <Cash />
            },
            {

                path: "/bond",
                element: <Bond />
            },
            {
                path: "/risktolerance",
                element: <RiskTolerance />
            }
        ]
    }
]);