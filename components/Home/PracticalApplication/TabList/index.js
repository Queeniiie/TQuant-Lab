import classNames from 'classnames';

import styles from './index.module.scss';

const TabList = ({ currentTab, list, handleClickTab }) => {
  return (
    <div className={styles.tabList}>
      {list.map((tab) => (
        <button
          key={tab.id}
          className={classNames(styles.tab, { [styles.isActive]: currentTab.id === tab.id })}
          onClick={() => handleClickTab(tab)}>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabList;
