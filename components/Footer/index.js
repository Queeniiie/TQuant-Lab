import Logo from '@/public/logo.png';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.map}>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
        </div>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
        </div>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
        </div>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
        </div>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
        </div>
        <div className={styles.linkGroup}>
          <button type="button">按鈕按鈕</button>
          <button type="button">按鈕按鈕</button>
          <button type="button">按鈕按鈕</button>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.info}>
        <div className={styles.media}>
          <div />
          <div />
        </div>
        <div className={styles.copyright}>
          <img className={styles.logo} src={Logo.src} alt="" />
          <h5>©All Rights Reserved 台灣經濟新報文化事業股份有限公司.</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
