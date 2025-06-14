import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,   
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
