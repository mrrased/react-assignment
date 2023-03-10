import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserInfo from './Component/Form/UserInfo/UserInfo';
import List from './Component/List/List';
import PrivateRoute from './Hooks/PrivateRoute';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserInfo />,
    },
    {
      path: "/list",
      element: <PrivateRoute><List/></PrivateRoute> ,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
