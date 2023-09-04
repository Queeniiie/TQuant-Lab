import { useState } from 'react';

import TabList from './TabList';
import styles from './index.module.scss';

const PracticalApplication = () => {
  const tabList = [
    {
      id: '1',
      name: '應用一',
      list: [
        { id: 'a', text: "Schedule daily downloads of third party data" },
        { id: 'b', text: "Create an options trading script that uses QuantRocket's Python API to query data and place orders using the blotter" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "http://www.fooish.com/"
    },
    {
      id: '2',
      name: '應用二',
      list: [
        { id: 'a', text: "Schedule daily downloads of third party data" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "https://www.google.com/webhp?hl=zh-TW&tab=ww"
    },
    {
      id: '3',
      name: '應用三',
      list: [
        { id: 'b', text: "Create an options trading script that uses QuantRocket's Python API to query data and place orders using the blotter" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "https://www.google.com/webhp?hl=zh-TW&tab=ww"
    },
    {
      id: '4',
      name: '應用四',
      list: [
        { id: 'a', text: "Schedule daily downloads of third party data" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "https://www.google.com/webhp?hl=zh-TW&tab=ww"
    },
    {
      id: '5',
      name: '應用五',
      list: [
        { id: 'a', text: "Schedule daily downloads of third party data" },
        { id: 'b', text: "Create an options trading script that uses QuantRocket's Python API to query data and place orders using the blotter" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' },
        { id: 'e', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "https://www.google.com/webhp?hl=zh-TW&tab=ww"
    },
    {
      id: '6',
      name: '應用六',
      list: [
        { id: 'a', text: "Schedule daily downloads of third party data" },
        { id: 'b', text: "Create an options trading script that uses QuantRocket's Python API to query data and place orders using the blotter" },
        { id: 'c', text: 'Create and schedule multi-step maintenance tasks such as creating futures calendar spreads based on changing rollover rules' },
        { id: 'd', text: 'ScheRun third-party backtesters such as backtrader' },
        { id: 'e', text: 'ScheRun third-party backtesters such as backtrader' },
        { id: 'r', text: 'ScheRun third-party backtesters such as backtrader' }
      ],
      iframe: "https://www.google.com/webhp?hl=zh-TW&tab=ww"
    }
  ];

  const [currentTab, setCurrentTab] = useState(tabList[0]);

  const handleClickTab = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <div className={styles.practicalApplication}>
      <h2 className={styles.title}>TQuant Lab 實際應用</h2>
      <div className={styles.container}>
        <TabList currentTab={currentTab} list={tabList} handleClickTab={handleClickTab} />
        <div className={styles.list}>
          {currentTab.list.map((item)=>(
            <div className={styles.item} key={`${currentTab.id}-${item.id}`}>
              <div className={styles.icon}>•</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
        <div className={styles.iframeContainer} >
          <iframe src={currentTab?.iframe} />
        </div>
      </div>
    </div>
  );
};

export default PracticalApplication;
