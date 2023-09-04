import styles from './index.module.scss';

const FeaturesCard = ({ title, content }) => {
  return (
    <div className={styles.featuresCard}>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default FeaturesCard;
