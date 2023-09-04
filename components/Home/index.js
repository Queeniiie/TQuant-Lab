import { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Div100vh, { use100vh } from 'react-div-100vh';
import classNames from 'classnames';

import useWindowSize from '@/utils/windowSize';
import Footer from '../Footer';
import PracticalApplication from './PracticalApplication';
import Join from './Join';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';
import FeaturesCard from './FeaturesCard';
import IntroduceCard from './IntroduceCard';

import Logo from '@/public/logo_2.png';
import NextPageIcon from '@/public/icon/next-page.png';
import DialogBoxPattern01 from '@/public/dialog_box_1.png';
import DialogBoxPattern02 from '@/public/dialog_box_2.png';
import DialogBoxPattern03 from '@/public/dialog_box_3.png';

import styles from './index.module.scss';

const Home = () => {
  const newsData = [
    {
      date: '2023/02/16',
      title: '標題標題標題標題標題標題標題標題標題標題標標題標題標題標題標',
      content:
        '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文',
    },
    {
      date: '2023/02/16',
      title: '標題標題標題標題標題標題標題標題標題標題標標題標題標題標題標',
      content:
        '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文',
    },
    {
      date: '2023/02/16',
      title: '標題標題標題標題標題標題標題標題標題標題標標題標題標題標題標',
      content:
        '內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文',
    },
  ];
  const featuresData = [
    { title: '產品特點一特點', content: '產品內容介紹產品內容介紹產品內容介紹產品內容介' },
    { title: '產品特點一特點', content: '產品內容介紹產品內容介紹產品內容介紹產品內容介' },
    { title: '產品特點一特點', content: '產品內容介紹產品內容介紹產品內容介紹產品內容介' },
  ];
  const IntroduceData = [
    {
      title: '資料庫',
      content: '產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產內容介紹產品內容介紹產',
      tag: ['T QUANT data set '],
    },
    {
      title: '資料處理',
      content: '產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產內容介紹產品內容介紹產',
      tag: ['alphalens', 'tej zipline'],
    },
    {
      title: '分析套件',
      content: '產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產內容介紹產品內容介紹產',
      tag: ['alphalens', 'tej zipline'],
    },
    {
      title: '回測報表',
      content: '產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產內容介紹產品內容介紹產',
      tag: ['alphalens', 'tej zipline'],
    },
  ];
  const height = use100vh();
  const NewsRef = useRef();
  const IntroduceRef = useRef();
  const FooterRef = useRef();
  const { width: innerWidth, height: innerHeight } = useWindowSize();
  const [newsSectionHeight, setNewsSectionHeight] = useState(1);
  const [introduceSectionHeight, setIntroduceSectionHeight] = useState(1);
  const [footerSectionHeight, setFooterSectionHeight] = useState(1);

  const heandleNextPage = () => {
    document.getElementById('parallax').scrollTo({ top: innerHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (IntroduceRef.current && FooterRef.current && NewsRef.current) {
      setNewsSectionHeight(NewsRef.current.offsetHeight / innerHeight);
      setIntroduceSectionHeight(IntroduceRef.current.offsetHeight / innerHeight);
      setFooterSectionHeight((innerWidth < 1200 ? FooterRef.current.offsetHeight : 360) / innerHeight);
    }
  }, [innerWidth, innerHeight]);

  return (
    <Parallax
      id="parallax"
      key={4.25 + newsSectionHeight + introduceSectionHeight + footerSectionHeight}
      className={styles.home}
      pages={4.25 + newsSectionHeight + introduceSectionHeight + footerSectionHeight}
      style={{ height: height }}
    >
      <ParallaxLayer className={styles.ani} offset={0} sticky={{ start: 0, end: 1 }}>
        <div className={classNames(styles.circle, styles.purple)} />
        <div className={classNames(styles.circle, styles.yellow)} />
        <div className={classNames(styles.circle, styles.skyblue)} />
        <div className={classNames(styles.circle, styles.blue)} />
      </ParallaxLayer>
      {/* 主視覺 */}
      <ParallaxLayer className={styles.main} offset={0}>
        <div className={styles.title}>
          <div className={classNames(styles.dialogBoxPattern, styles.one)}>
            <img src={DialogBoxPattern01.src} alt="" />
            <h3>三大產品特色</h3>
          </div>
          <div className={classNames(styles.dialogBoxPattern, styles.two)}>
            <img src={DialogBoxPattern02.src} alt="" />
            <h3>實際應用</h3>
          </div>
          <div className={classNames(styles.dialogBoxPattern, styles.three)}>
            <img src={DialogBoxPattern03.src} alt="" />
            <h3>三大產品內容</h3>
          </div>
          <img src={Logo.src} className={styles.logo} alt="TQuant Lab" />
          <h1>
            建立你的<span>交易回測</span>系統
            <br />
            打造<span>專屬投資</span>研究金鑰
          </h1>
        </div>
        <button type="button" className={styles.nextPage} onClick={() => heandleNextPage()}>
          <img src={NextPageIcon.src} alt="" />
        </button>
      </ParallaxLayer>
      {/* 最新消息 */}
      <ParallaxLayer offset={1} factor={newsSectionHeight}>
        <div className={styles.news} ref={NewsRef}>
          <SectionTitle text={'最新消息'} />
          {newsData.map((_, idx) => (
            <NewsCard key={idx} {..._} />
          ))}
        </div>
      </ParallaxLayer>
      {/* 產品特點 */}
      <ParallaxLayer
        className={styles.features}
        offset={1 + newsSectionHeight}
        sticky={{ start: 1 + newsSectionHeight, end: 2 + newsSectionHeight }}
      >
        <Div100vh>
          <div className={styles.title}>
            <h2>
              <span>TQuant Lab</span>
              <br />
              三大特點
            </h2>
            <div className={styles.hr} />
            <div className={styles.content}>
              <p>產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介紹產品內容介</p>
              <button type="button">瞭解更多</button>
            </div>
          </div>
          <div className={styles.list}>
            {featuresData.map((_, idx) => (
              <FeaturesCard key={idx} {..._} />
            ))}
          </div>
        </Div100vh>
      </ParallaxLayer>
      {/* 產品內容介紹 */}
      <ParallaxLayer className={styles.introduce} factor={introduceSectionHeight} offset={2 + newsSectionHeight}>
        <div ref={IntroduceRef}>
          <SectionTitle text={'產品內容介紹'} />
          <h3>產品內容介介紹產品內產品內容介介紹產品內產品內容介介紹產品內</h3>
          <h5>
            產品內容介介紹產品內產品內容介介紹產品內產品內容介介紹產品內產品內容介介紹產品內產品內容介介紹產品內產品內容介介紹產品內
          </h5>
          <div className={styles.list}>
            {IntroduceData.map((_, idx) => (
              <IntroduceCard key={idx} {..._} />
            ))}
          </div>
        </div>
      </ParallaxLayer>
      {/* 實際應用 */}
      <ParallaxLayer
        className={styles.application}
        factor={1.25}
        offset={2 + newsSectionHeight + introduceSectionHeight}
      >
        <PracticalApplication />
      </ParallaxLayer>
      {/* 參與試用 */}
      <ParallaxLayer className={styles.join} offset={3.25 + newsSectionHeight + introduceSectionHeight}>
        <Join />
      </ParallaxLayer>
      {/* 頁尾 */}
      <ParallaxLayer offset={4.25 + newsSectionHeight + introduceSectionHeight}>
        <div ref={FooterRef}>
          <Footer />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
