import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import './index.css';
import App from './App.tsx';
import Dashboard from './layouts/Dashboard.tsx';
import { Profile } from './layouts/Profile.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/home', element: <div>Home Page</div> },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          { path: 'profile', element: <Profile /> },
          { path: 'security', element: <div>Security Page</div> },
          { path: 'settings', element: <div>Settings Page</div> },
        ],
      },
      // { path: '/features', element: <Features />, children: [] },
      // { path: '/about', element: <About /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
