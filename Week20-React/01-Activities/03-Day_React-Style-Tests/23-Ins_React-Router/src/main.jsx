import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([ // takes in array of object determining the path
  {
    path: '/', // react router monitors address bar to see what needs to be rendered
    element: <App />, // home element
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />, // home is children, rendered inside app as default
      },
      {
        path: '/About',
        element: <About />, // react router detects /about, will render about
      },
      {
        path: '/Blog',
        element: <Blog />,
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
