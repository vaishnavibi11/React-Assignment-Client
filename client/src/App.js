import './App.css';
import Login from './pages/Login';
import reducer, { initialState } from './DataLayer/reducer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataLayer } from './DataLayer/DataLayer';
import ErrorHandler from './constants/ErrorHandler';
import Home from './pages/Home';
import Layout from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element:<Layout> <Home /></Layout>
    }
  ]);
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <ErrorHandler />
      <RouterProvider router={router} />
    </DataLayer>
  );
}

export default App;
