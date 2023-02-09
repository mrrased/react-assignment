import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from '@mui/material'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Component/Form/Register/Register';
import Login from './Component/Form/Login/Login';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/contact",
      element: <div>This is contact page</div>,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
