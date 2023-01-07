import styles from './user-card.module.scss';
import male from '../../../../../../apps/webapp/src/assets/images/male.png';
import female from '../../../../../../apps/webapp/src/assets/images/female.png';
import { Link } from 'react-router-dom';

export interface UserCardProps {
  id: number;
  username: string;
  age: number;
  city: string;
  country: string;
  gender: string;
}

export function UserCard(props: UserCardProps) {
  return (
    <div className={styles['profile__list']}>
      <Link to={`/profile/${props.id}`}>
        <div className={styles['profile__list__item']}>
          <div className={styles['profile-avatar']}>
            <span className={styles['avatar']}>
              <img
                src={props.gender === 'male' ? male : female}
                alt={`avatar de ${props.username}`}
              />
            </span>
          </div>
          <div className={styles['profile-infos']}>
            <div className={styles['profile-infos__username']}>
              {props.username}
            </div>
            <div className={styles['profile-infos__age']}>{props.age} ans</div>
            <div className={styles['profile-infos__location']}>
              <span className="material-icons material-symbols-outlined">
                place
              </span>
              <span>
                {props.country ? props.country : 'FR'},
                {props.city ? props.city : 'Chilly-Mazarin'}
              </span>
            </div>
          </div>
          <div
            className={styles['profile-favorite']}
            onClick={() => alert('favoris')}
          >
            <span className="material-icons material-symbols-outlined">
              star_border
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default UserCard;
