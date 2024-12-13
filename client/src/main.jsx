import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';
import Food from './components/Food.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Donations from './components/Donations.jsx';
import Contact from './components/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Food',
        element: <Food />,
      },
      {
        path: '/Donations',
        element: <Donations />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      
    ],
  },

  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

