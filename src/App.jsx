import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import React from "react";
import CreatePost from "./assets/post";
import RecupPost from "./assets/affichagepost";
import SearchPage from "./components/searchPage/SearchPage";
import SearchPosts from "./SearchPosts/SearchPosts";
import LoginForm from "./Auth/Login/LoginForm";
import Logout from "./Auth/Logout/Logout";
import Register from "./Auth/Register/Register";
import Profile from "./components/Profile/Profile";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/src/Auth/Login/LoginForm.jsx",
            element: <LoginForm />,
        },
        {
            path: "/src/Auth/Register/Register.jsx",
            element: <Register />,
        },
        {
            path: "/src/components/Profile/Profile.jsx",
            element: <Profile />,
        },
        {
            path: "/src/Auth/Logout/Logout.jsx",
            element: <Logout />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/src/SearchPosts/SearchPosts.jsx",
            element: <SearchPosts />,
        },
        {
            path: "/src/assets/post.jsx",
            element: <CreatePost />,
        },
        {
            path: "/src/assets/affichagepost.jsx",
            element: <RecupPost />,
        },
    ]);

    /* console.log('app', array[0].original_title); */
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
