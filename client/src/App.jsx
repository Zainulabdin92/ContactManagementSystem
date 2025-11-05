import React, {createContext, useEffect, useState}from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Logout from './Components/Logout';


export const UserContext = createContext(null)

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        index:true,
        element:<Contacts/>
      },
      {
        path:'/dashboard/add-contact',
        element:<AddContact/>
      },
      {
        path:'/dashboard/edit-contact/:id',
        element:<EditContact/>
      }
    ]
  },
  {
    path:'logout',
    element:<Logout/>
  },
])

const App = () => {
  const [user,setUser]=useState()
  useEffect(()=>{
    axios.get("http://localhost:3000/contactmsyt/verify",{
      headers:{
        Authorization:`Berear ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      if(res.data.success){
        setUser(res.data.user)
      }
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <RouterProvider router={router}/>
    </UserContext.Provider>
    
    </>
    
  )
}

export default App
