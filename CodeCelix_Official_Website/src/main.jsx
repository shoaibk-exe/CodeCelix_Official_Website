import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import NotFound from './components/NotFound.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />);
