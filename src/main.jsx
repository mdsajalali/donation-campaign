import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Root from "./Root/Root.jsx";
import DonationDetail from "./components/DonationDetail.jsx";
import "./index.css";
import Donations from "./pages/Donations.jsx";
import Statistics from "./pages/Statistics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetail />,
        loader: () => fetch("./data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
