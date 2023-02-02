import Card from '../Card';
import { useSelector } from 'react-redux';

const Gallery = () => {
  const cards = useSelector((state) => state.productsSlice.cards);
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__inner">
          <div className="gallery__title">Gallery</div>
          <div className="gallery__items">
            {cards.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
