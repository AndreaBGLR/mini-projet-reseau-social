import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from './components/searchPage/SearchPage';
import Home from './components/home/Home';
import Post from "./assets/post";
import React from "react";

import LoginForm from "./Auth/Login/LoginForm";
import Register from "./Auth/Register/Register";
import Logout from "./Auth/Logout/Logout";
import Footer from "./Footer/Footer";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/search",
      element: <SearchPage />
    }
  ])


    /* console.log('app', array[0].original_title); */
  return (
    <>
        <RouterProvider router={router} />

    </>
  );


export default App;
