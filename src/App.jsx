
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from './components/searchPage/SearchPage';
import Home from './components/home/Home';

import Post from "./assets/post";
import React from "react";
import CreatePost from "./assets/post"
import RenderPost from "./assets/affichagepost"


function App (){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/createPost",
      element: <CreatePost />
    },
    {
      path: "/renderPost",
      element: <RenderPost />
    }
  ])


    /* console.log('app', array[0].original_title); */
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
  }

export default App;
