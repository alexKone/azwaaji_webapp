import styles from './sidenav.module.scss';

export default function Sidenav() {
  return (
    <aside className={styles['sidenav']}>
      <nav className={styles['sidenav__container']}>
        <header className={styles['sidenav__header']}>Side Nav</header>
        <ul className={styles['sidenav__content']}>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </nav>
    </aside>
  );
}
