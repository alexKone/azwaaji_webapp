import { ButtonForm } from '@azwaaji/common-ui';
import { FormEvent, useState } from 'react';
import CONSTANTS from 'apps/webapp/src/constants';
import { Loading } from '@azwaaji/shared/ui';
import { useNavigate } from 'react-router-dom';
import { appStore } from '../../app-store';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(`${CONSTANTS.baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      localStorage.setItem('token', result.token);
      appStore.currentUser = {
        email: result.email,
        gender: result.gender,
      };
      appStore.isAuth = true;
      navigate('/');
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) <Loading />;

  return (
    <div>
      {error && <h1>Il y a une erreur</h1>}
      <form onSubmit={handleSubmit}>
        <div className="login__username">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className="login__password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <ButtonForm label="login" type="submit" />
      </form>
    </div>
  );
}
