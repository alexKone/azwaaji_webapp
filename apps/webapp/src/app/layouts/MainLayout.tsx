import { Navigate, Outlet } from 'react-router-dom';
import { Header } from '@azwaaji/shared/ui';
import { BottomNav } from '../components/_partials';
import Sidenav from '../components/_partials/sidenav/sidenav';
import { appStore } from '../app-store';
import { useSnapshot } from 'valtio';
import { useEffect } from 'react';

export default function MainLayout() {
  const snapshot = useSnapshot(appStore);
  const initUser = () => {
    // check if localStorage has token
    // if has token
    // // call api to /me
    // // // if true - set datas to appStore
    // // // else - redirect to login page
    // else not - redirect to login page
    console.log('init User');
  };

  useEffect(() => {
    initUser();
  }, []);

  // if (!snapshot.isAuth) {
  //   console.log(snapshot.isAuth);
  //   return <Navigate to={`/auth/login`} replace />;
  // }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Sidenav />
      <BottomNav />
    </>
  );
}
