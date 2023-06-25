import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import About from "../page/About/About";
import ContactForm from "../page/contact/ContactForm";
import AddProject from "../page/AddProject/AddProject";
import Project from "../page/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactForm />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/add-project",
        element: <AddProject />,
      },
    ],
  },
]);
export default router;
