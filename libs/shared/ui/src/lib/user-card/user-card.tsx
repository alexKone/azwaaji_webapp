import styles from './user-card.module.scss';

/* eslint-disable-next-line */
export interface UserCardProps {}

export function UserCard(props: UserCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UserCard!</h1>
    </div>
  );
}

export default UserCard;
