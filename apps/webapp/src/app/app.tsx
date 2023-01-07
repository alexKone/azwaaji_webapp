// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES } from '../routes';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Account from './pages/main/Account';
import Homepage from './pages/main/Homepage';
import ProfileDetails from './pages/main/Profiles/ProfileDetails';
import Page404 from './pages/Page404';
import Messages from './pages/main/Messages';
import Favorites from './pages/main/Favorites';

export function App() {
  const mainRoutes: RouteObject = {
    path: ROUTES.main.path,
    element: <MainLayout />,
    children: [
      { index: true, path: ROUTES.main.home, element: <Homepage /> },
      { path: ROUTES.main.profile.details, element: <ProfileDetails /> },
      { path: ROUTES.main.account, element: <Account /> },
      { path: ROUTES.main.messages, element: <Messages /> },
      { path: ROUTES.main.favorites, element: <Favorites /> },
      { path: ROUTES.main.notFound, element: <Page404 /> },
      { path: 'auth', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  };

  const authRoutes: RouteObject = {
    path: ROUTES.auth.path,
    element: <AuthLayout />,
    children: [
      { path: ROUTES.auth.login, element: <Login /> },
      { path: ROUTES.auth.register, element: <Register /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  };

  return useRoutes([mainRoutes, authRoutes]);
}

export default App;
