import account_circle from '../../../../assets/icons/account_circle.svg';
import filter from '../../../../assets/icons/filter.svg';
import home from '../../../../assets/icons/home.svg';
import menu from '../../../../assets/icons/menu.svg';
import person from '../../../../assets/icons/person.svg';
import star from '../../../../assets/icons/star.svg';
import mark_chat_unread from '../../../../assets/icons/mark_chat_unread.svg';
import styles from './bottom-nav.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routes';
import { useSidenav } from '@azwaaji/shared/ui';

export default function BottomNav() {
  const { toggle, isOpen } = useSidenav();

  const toggleSidenav = () => {
    toggle(!isOpen);
  };

  return (
    <nav className={styles['content']}>
      <button className={styles['item']} onClick={toggleSidenav}>
        <span>
          <img className={styles['item__icon']} src={menu} alt="" />
        </span>
        <span>menu</span>
      </button>
      <div className={styles['item']}>
        <Link className={styles['item__wrapper']} to={ROUTES.main.home}>
          <span>
            <img className={styles['item__icon']} src={home} alt="" />
          </span>
          <span>home</span>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link className={styles['item__wrapper']} to={ROUTES.main.messages}>
          <span>
            <img
              className={styles['item__icon']}
              src={mark_chat_unread}
              alt=""
            />
          </span>
          <span>message</span>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link className={styles['item__wrapper']} to={ROUTES.main.account}>
          <span>
            <img className={styles['item__icon']} src={account_circle} alt="" />
          </span>
          <span>profile</span>
        </Link>
      </div>
      <div className={styles['item']}>
        <Link className={styles['item__wrapper']} to={ROUTES.main.favorites}>
          <span>
            <img className={styles['item__icon']} src={star} alt="" />
          </span>
          <span>favoris</span>
        </Link>
      </div>
    </nav>
  );
}
