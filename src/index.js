import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {
     createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Root from "./routes/Root";
import Home from "./routes/Home";
import Users from "./routes/Users";
import NotFound from "./routes/NotFound";
import User from "./routes/User";
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "/users",
            element: <Users/>
        },
        {
            path: "/users/:userId",
            element: <User/>
        }
    ],
},
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
