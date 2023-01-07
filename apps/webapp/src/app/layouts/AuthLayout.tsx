import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function AuthLayout() {
  const { pathname } = useLocation();
  const [loginPage, setLoginPage] = useState(pathname === '/auth/login');

  useEffect(() => {
    setLoginPage(!loginPage);
  }, [pathname]);

  return (
    <div>
      <header>
        {loginPage ? (
          <Link to={'/auth/login'}>login</Link>
        ) : (
          <Link to={`/auth/register`}>register</Link>
        )}
      </header>
      <Outlet />
    </div>
  );
}
