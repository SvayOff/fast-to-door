const SlideDot = ({ dot }) => {
  return (
    <div className="slider__choose-dot">
      <h4 className="slider__choose-name">{dot.dotName}</h4>
      <div className="slider__choose-circle"></div>
    </div>
  );
};

export default SlideDot;
