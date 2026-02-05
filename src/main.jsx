import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './style/index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home />},
      { path: 'products', element: <Products />},
      { path: 'cart', element: <Cart />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
