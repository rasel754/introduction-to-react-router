import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import ErrorPage from './components/ErroePage/ErrorPage.jsx';


const router = createBrowserRouter ([
  {
    path :'/',
    element :<Home></Home>,
    errorElement :<ErrorPage></ErrorPage>,
    children :[
      {
        path :'/about',
        element :<About></About>
      },
      {
        path :'/contact',
        element :<Contact></Contact>
      },
      {
        path : '/users',
        
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Users></Users>
      },{
        path: '/user/:userId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <UserDetails></UserDetails>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
