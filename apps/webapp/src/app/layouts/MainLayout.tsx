import { Outlet } from 'react-router-dom';
import { Header } from '@azwaaji/shared/ui';
import { BottomNav } from '../components/_partials';
import Sidenav from '../components/_partials/sidenav/sidenav';

export default function MainLayout() {
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
