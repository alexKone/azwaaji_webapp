import { UserCard } from '@azwaaji/shared/ui';
import { appStore } from '../../app-store';
import { useSnapshot } from 'valtio';
import { useEffect, useState } from 'react';
import CONSTANTS from 'apps/webapp/src/constants';
import { getAge } from 'apps/webapp/src/tools';

export interface IProfile {
  id: number;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  address: Address;
  user: User;
}
export interface Address {
  street: string;
  city: string;
  country: string;
}
export interface User {
  email: string;
  username: string;
  last_login: string;
  created_at: string;
}

export default function Homepage() {
  const dataStorage: IProfile | null = JSON.parse(
    localStorage.getItem('currentUser') || ''
  );
  const gender = dataStorage?.gender === 'male' ? 'female' : 'male';
  const users = useSnapshot(appStore.users);
  const [profiles, setProfiles] = useState<IProfile[] | []>([]);
  // console.log(localStorage.getItem('token'));
  useEffect(() => {
    const apiCall = async () => {
      const myFetch = await fetch(
        `${CONSTANTS.baseUrl}/profiles.json?gender=${gender}`,
        {
          method: 'get',
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem('token')}`,
          // },
        }
      );

      const result = await myFetch.json();
      setProfiles(result);
      console.log({ result });
      appStore.users = result;
    };

    apiCall();
  }, []);

  console.log({ users, profiles });

  // if (users.length) console.log('users');

  return (
    <div>
      <section>
        <div className="home__header">
          <div className="header__username">Bienvenue Fatima</div>
          <div className="header__tools">
            <button>
              <span>filtre</span>
            </button>
            <span>{users.length} membres</span>
            <button className="btn-help">?</button>
          </div>
        </div>
        <div className="home__content">
          {users.map((profile: IProfile) => (
            <UserCard
              key={profile.id}
              id={profile.id}
              username={profile.user.username}
              gender={profile.gender}
              country={profile.address.country}
              city={profile.address.city}
              age={getAge(profile.birthdate)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
