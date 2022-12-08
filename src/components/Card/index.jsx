import styles from '../../libs/style.scss';

const Card = ({ imgUrl, desc, date }) => {
  return (
    <div
      className="gallery__item"
      style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
      <img className="gallery__item-img" src={imgUrl} alt="gallery" />
      <p className="gallery__item-desc">{desc}</p>
      <span className="gallery__item-date">{date}</span>
    </div>
  );
};

export default Card;
