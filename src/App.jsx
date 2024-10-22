import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Dashboard/Overview";
import Settings from "./pages/Dashboard/Settings";
import DashboardLayout from "./Layouts/DashboardLayout";
import Hero from "./pages/about/Hero";
import Display from "./pages/Display";
import AdDetail from "./pages/AdDetail";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
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
      path: "/hero",
      element: <Hero/>,
    },
    {
      path: "/display",
      element: <Display/>,
    },
    {
      path: "/login",
      element: <UserLogin/>,
    },
    {
      path: "/register",
      element: <UserRegister/>,
    },
    {
      path: "/detail",
      element: <AdDetail/>,
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
