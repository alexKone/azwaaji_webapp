import { ButtonForm } from '@azwaaji/common-ui';
import { FormEvent, useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form__wrapper">
          <div className="username">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="gender"></div>
          <div className="birthdate"></div>
          <div className="email">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password"></div>
          <div className="password-confirm"></div>
          <ButtonForm label="Inscription" type="submit" />
        </div>
      </form>
    </div>
  );
}
