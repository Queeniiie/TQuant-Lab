import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Logo from '@/public/logo.png';
import EarthIcon from '@/public/icon/earth.svg';

import styles from './index.module.scss';

const NavItem = ({ data }) => (
  <Link className={styles.item} href={data.link}>
    {data.name}
  </Link>
);

const Header = () => {
  const [isExpandMenu, setIsExpandMenu] = useState(false);
  const navItem = [
    { name: '關於產品', link: { pathname: '', query: '' } },
    { name: '資料集', link: { pathname: '', query: '' } },
    { name: '技術手冊', link: { pathname: '', query: '' } },
    { name: '範例教學', link: { pathname: '', query: '' } },
    { name: '訂閱頁面', link: { pathname: '', query: '' } },
    { name: '常見Q&A', link: { pathname: '', query: '' } },
  ];

  return (
    <header className={styles.header}>
      <img src={Logo.src} className={styles.logo} alt="TQuant-Lab" />
      <div className={classNames(styles.menu, { [styles.isExpanded]: isExpandMenu })}>
        <nav>
          {navItem.map((_data, idx) => (
            <NavItem key={idx} data={_data} />
          ))}
        </nav>
        <div className={styles.other}>
          <EarthIcon />
          <NavItem data={{ name: '登入', link: { pathname: '', query: '' } }} />
          <button type="button" className={styles.signup}>
            免費註冊
          </button></div>
      </div>
      <button className={styles.hamburgerConatiner} type="button" onClick={() => setIsExpandMenu(!isExpandMenu)}>
        <div className={classNames(styles.hamburger, { [styles.isExpandMenu]: isExpandMenu })}>
          <span />
          <span />
          <span />
        </div>
      </button>
    </header>
  );
};

export default Header;
