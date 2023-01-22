const Card = ({ card }) => {
  return (
    <div
      className="gallery__item"
      style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
      <img className="gallery__item-img" src={card.imgUrl} alt="gallery" />
      <p className="gallery__item-desc">{card.desc}</p>
      <span className="gallery__item-date">{card.date}</span>
    </div>
  );
};

export default Card;
