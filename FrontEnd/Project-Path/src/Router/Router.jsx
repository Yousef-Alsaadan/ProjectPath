import { createBrowserRouter } from "react-router-dom";
import App from "../App";
 import Dashboard from '../Pages/Dashboard'
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
export default Router;
