import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx';
import Food from './components/Food.jsx';
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

