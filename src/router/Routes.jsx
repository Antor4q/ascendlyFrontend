import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import UserSignIn from "../pages/UserSignIn/UserSignIn";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    
    {
      path:"/dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>
    },
    {
      path: "/signIn",
      element: <UserSignIn/>
    }
  ]);

export default router