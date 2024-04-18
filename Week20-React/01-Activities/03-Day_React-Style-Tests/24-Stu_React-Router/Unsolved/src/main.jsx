import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
// pages have been created

const router = createBrowserRouter([ // tells React Router how to display application based on browser path
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/', // react router monitors address bar to see what needs to be rendered
    element: <App />, // home element
    errorElement: <ErrorPage />, // if none match, show error page
    children: [
      {
        index: true,
        element: <HomePage />, // landing page, as above
      },
      {
        path: '/about',
        element: <AboutPage />, // react router detects /about, will render about
      },
      {
        path: '/profile/:id', // id route parametre
        element: <ProfilePage />,
      },
    ],
  },
]); // creating all the routes

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
