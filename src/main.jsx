import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Landing } from "./pages/Landing/Landing.jsx";
import { Browser } from "./pages/Browser/Browser.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Default home view inside layout
    element: <Landing />,
    errorElement: <h1>404: Page Not Found</h1>,
  },
  {
    path: "/browser", // Page accessible at /about
    element: <Browser />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
