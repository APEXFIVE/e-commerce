import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Dashboard/Overview";
import Settings from "./pages/Dashboard/Settings";
import DashboardLayout from "./Layouts/DashboardLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/dashbord",
      element: <DashboardLayout/>,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
