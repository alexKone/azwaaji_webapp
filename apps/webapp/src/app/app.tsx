// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Account from './pages/main/Account';
import Homepage from './pages/main/Homepage';
import ProfileDetails from './pages/main/Profiles/ProfileDetails';
import Page404 from './pages/Page404';

export function App() {
  const mainRoutes: RouteObject = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/profile/:id', element: <ProfileDetails /> },
      { path: '/my-account', element: <Account /> },
      { path: '/404', element: <Page404 /> },
      { path: 'auth', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  };

  const authRoutes: RouteObject = {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  };

  return useRoutes([mainRoutes, authRoutes]);
}

export default App;
