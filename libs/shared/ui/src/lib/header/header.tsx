import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  imgLink: string;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']}>
      <img className={styles['img']} src={props.imgLink} alt="" />
    </header>
  );
}

export default Header;
