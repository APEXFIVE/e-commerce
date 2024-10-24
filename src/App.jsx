import React from "react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css"
import "./dashboard.css"
import DashboardLayout from "./Layouts/DashboardLayout";
import Hero from "./pages/about/Hero";
import Display from "./pages/Display";
import AdDetail from "./pages/AdDetail";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import Overview from "./pages/Dashboard/Overview"; 
import Home from "./pages/home";
import About from "./pages/about";
import Adverts from "./pages/Dashboard/Adverts";
import AddAdverts from "./pages/Dashboard/AddAdverts";
import Orders from "./pages/Dashboard/Orders";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import Logout from "./pages/Dashboard/Logout";
import Login from "./pages/Forms/Login";
import Register from "./pages/Forms/Register";
import SingleAdd from "./pages/Dashboard/SingleAdd";
import EditAdvert from "./pages/Dashboard/EditAdvert";
import List from "./pages/home/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vid from "./pages/home/vid";
import Plan from "./pages/home/Plan";


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
      path: "/list",
      element: <List/>,
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
      path: "/video",
      element: <Vid/>,
    },
    {
      path: "/plan",
      element: <Plan/>,
    },
    {
      path: "/detail",
      element: <AdDetail/>,
    },

    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "adverts/",
          element: <Adverts />,
        },
        {
          path: "adverts/add",
          element: <AddAdverts />,
        },
        {
          path: "adverts/:id",
          element: <SingleAdd />,
        },
        {
          path: "edit/:id",
          element: < EditAdvert/>,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "logout",
          element: <Logout/>,
        },
      ],
    },
   {
    path: "/log",
    element:<Login/>
   },
   {
    path: "/reg",
    element:<Register/>
   },
   {
    path: "/navbar",
    element:<Navbar/>
   },
   {
    path: "/footer",
    element:<Footer/>
   },



  ]);

  return <RouterProvider router={router} />;
}

export default App;
