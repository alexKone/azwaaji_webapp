import { useSidenav } from '@azwaaji/shared/ui';
import styles from './sidenav.module.scss';

export default function Sidenav() {
  const { isOpen } = useSidenav();

  console.log(isOpen);

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
