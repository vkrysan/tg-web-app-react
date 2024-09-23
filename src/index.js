import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sminex from './pages/Sminex';
import UniqueForm from './pages/UniqueForm';
import UniquePage from './pages/UniquePage';
import Presentation from './pages/Presentation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sminex />
  },
  {
    path: "/sminex",
    element: <UniqueForm />
  },
  {
    path: "/unique",
    element: <UniquePage />
  },
  {
    path: "/presentation",
    element: <Presentation />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

