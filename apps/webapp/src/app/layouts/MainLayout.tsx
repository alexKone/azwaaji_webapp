import { Outlet } from 'react-router-dom';
import { Header } from '@azwaaji/shared/ui';
import { BottomNav } from '../components/_partials';
import Sidenav from '../components/_partials/sidenav/sidenav';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { incremented, amountAdded } from '../features/counter/counter-slice';

export default function MainLayout() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(amountAdded(3));
  }

  useEffect(() => {
    console.log('useEffect');
  }, []);

  return (
    <>
      <button onClick={handleClick}>count is: {count}</button>
      <Header imgLink="../../assets/logo-azwj---light.png" />
      <main role="main">
        <Outlet />
      </main>
      <Sidenav />
      <BottomNav />
    </>
  );
}
