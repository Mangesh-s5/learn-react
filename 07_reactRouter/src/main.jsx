import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home.jsx";
import About from "../components/about.jsx";
import Contact_us from "../components/Contact_us.jsx";
import User from "../components/User.jsx";
import GitHub from "../components/GitHub.jsx";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact_us",
        element: <Contact_us />,
      },
    ],
  },
]);
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact_us" element={<Contact_us />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="github" element={<GitHub />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
