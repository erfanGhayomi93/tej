import { useRoutes } from "react-router-dom";
import { PrivateRoute } from "../../Components/PrivateRoute";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home/indes";
import { Login } from "../../pages/Login";

export const RoutesPage = () => {
    let routes = useRoutes([
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      { path: "Login", element: <Login /> },
      { path: "About", element: <About /> },
    ]);
    return routes;
  };