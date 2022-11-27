import { RouteObject } from "react-router-dom";
import Error from "./Error";
import Login from "./Login";
import Root from "./Root";
import Verify from "./Verify";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/verify",
                element: <Verify />
            },
        ]
    }
];