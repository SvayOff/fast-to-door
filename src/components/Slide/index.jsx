const Slide = ({ slide }) => {
  return (
    <div className="slider__item">
      <h3 className="slider__item-name">{slide.slideName}</h3>
      <p className="slider__item-text">{slide.slideDesc}</p>
    </div>
  );
};

export default Slide;
