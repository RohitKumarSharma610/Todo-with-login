import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Navigate
  } from "react-router-dom";
import Signup from './component/signup.jsx';
import Login from './component/login.jsx';
import Todoinput from './component/todoinput.jsx';
import Example from './component/pagenotfound.jsx';
import PrivateRoute from './component/secureroute.jsx'


  let routerr = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route index element={< Signup/>} />  
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/todo-list' element={
          <PrivateRoute>
            <Todoinput />
          </PrivateRoute>
        }/>
        <Route path='*' element={<Example/>}/>

      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
    <RouterProvider router={routerr}>
    <App />
    </RouterProvider>
)
