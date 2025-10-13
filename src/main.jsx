import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Root from "./Root.jsx";
import Skills from "./Component/Skills/Skills.jsx";
import Footer from "./Component/Footer/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "about",
        Component: About,
      },
      {
        path: "skills",
        Component: Skills,
      },

      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "footer",
        Component: Footer,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
