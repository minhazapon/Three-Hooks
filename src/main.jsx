import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import UseReducer from './useReducer Hook/UseReducer';
import UseMemo from './useMemo hook/UseMemo'
import WeatherApp from './Wapp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/useReducer",
         element: <UseReducer></UseReducer>      ,
       },
       {
         path: "/useMemo",
         element: <UseMemo></UseMemo>     ,
       },
       {
         path: "/wh",
         element: <WeatherApp></WeatherApp>     ,
       },
     
     ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
