import JoinIcon from '@/public/icon/join.svg';
import JoinBg from '@/public/join_bg.svg';

import styles from './index.module.scss';

const Join = () => {
  const navItem = [
    { name: '關於產品', link: { pathname: '', query: '' } },
    { name: '資料集', link: { pathname: '', query: '' } },
    { name: '技術手冊', link: { pathname: '', query: '' } },
    { name: '範例教學', link: { pathname: '', query: '' } },
    { name: '訂閱頁面', link: { pathname: '', query: '' } },
    { name: '常見Q&A', link: { pathname: '', query: '' } },
  ];

  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.title}><h2>參與試用</h2><JoinIcon /></div>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>免費註冊</button>
          <button className={styles.btn}>瞭解更多</button>
        </div>
        <p className={styles.description}>說明說明說明說<span className={styles.tag}>明說明說明</span>說明說明說明說</p>
        <JoinBg className={styles.bg} />
      </div>
    </div>
  );
};

export default Join;
