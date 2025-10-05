import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";
import Services from "./Components/Services/Services.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import BlogsSection from "./Components/BlogsSection/BlogsSection.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutSection />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/blogs",
        element: <BlogsSection />
      },
      {
        path: "/contacts",
        element: <Contact />
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
