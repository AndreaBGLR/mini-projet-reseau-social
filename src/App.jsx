import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";
import Home from "./components/home/Home";
import Post from "./assets/post";
import React from "react";
import LoginForm from "./Auth/Login/LoginForm";
import Logout from "./Auth/Logout/Logout";
import Register from "./Auth/Register/Register";
import navBar from "./components/navBar/navBar";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/login",
            element: <LoginForm />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/logout",
            element: <Logout />,
        },
        {
            path: "/searchPosts",
            element: <SearchPosts />,
        },
        {
            path: "/navBar",
            element: <navBar />,
        },
        {
            path: "/post",
            element: <Post />,
        },
        {
            path: "/affichagepost",
            element: <RecupPosts />,
        },
    ]);
    /* console.log('app', array[0].original_title); */
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
export default App;
