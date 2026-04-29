import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing.jsx";
import { Browser } from "./pages/Browser/Browser.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import "./styles/global.css";

const router = createBrowserRouter([
  {
    path: "/", // This is the path for the landing page
    element: <Landing />,
  },
  {
    path: "/browser", // This is the path for the browser page
    element: <Browser />,
  },
  {
    path: "*", // This will catch any undefined routes and render the NotFound component
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
