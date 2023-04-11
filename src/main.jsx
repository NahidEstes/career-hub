import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import Statistics from "./components/Statistics";
import "./index.css";
import { getData } from "./loaders/getData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobs-data.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: getData,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/job-data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
