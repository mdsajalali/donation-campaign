import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from "./Root/Root.jsx";
import DonationDetail from './components/DonationDetail.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children  : [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/donation/:id",
        element: <DonationDetail />,
        loader: () => fetch("./data.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
