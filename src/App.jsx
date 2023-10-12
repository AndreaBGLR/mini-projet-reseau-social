import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from './components/searchPage/SearchPage';
import Home from './components/home/Home';


// tableau test sergio



function App() {
  const [count, setCount] = useState(0)

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
  )
}

export default App
