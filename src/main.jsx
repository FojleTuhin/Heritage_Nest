import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import Root from './Root';
import FindProperty from './findProperty/FindProperty';
import AllProperty from './allProperty/AllProperty';
import PropertyDetails from './propertyDetails/PropertyDetails';
import AboutUs from './about/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/findProperty',
        element: <FindProperty></FindProperty>
      },
      {
        path: '/allProperty',
        element: <AllProperty></AllProperty>
      },
      {
        path: '/propertyDetails',
        element: <PropertyDetails></PropertyDetails>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
