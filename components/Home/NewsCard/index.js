import moment from 'moment';

import styles from './index.module.scss';

const NewsCard = ({ date, title, content }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.date}>
        <span className={styles.year}>{moment(date).format('YYYY')}</span>
        <span>{moment(date).format('MM')}</span>
        <span>/</span>
        <span>{moment(date).format('DD')}</span>
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <div className={styles.hr} />
        <p>
          {content}
          <span>查看更多</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
