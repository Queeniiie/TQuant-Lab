import styles from './index.module.scss';

const IntroduceCard = ({ title, content, tag }) => {
  return (
    <div className={styles.introduceCard}>
      <h3>{title}</h3>
      <div>
        <p>{content}</p>
        <div className={styles.tags}>
          {tag.map((_, idx) => (
            <span key={idx}>{_}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroduceCard;
