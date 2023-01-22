const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__inner">
          <h2 className="slider__title">How to consume exotic fruits?</h2>
          <div className="slider__box">
            <div className="slider__item active">
              <h3 className="slider__item-name">Passion fruit</h3>
              <p className="slider__item-text">
                The brown-violet skin of the passionfruit
                <img
                  className="slider__item-img"
                  src="./images/slider/slide_1.png"
                  alt="passion-fruit"
                />
                is quite dense - the fruit is well stored. The riper the fruit, the more pronounced
                its aroma. Passion fruit is eaten fresh or in the form of juice, jelly. The fruit is
                cut and the pulp with a large number of small seeds is taken out with a spoon. It
                has a sweet and sour, very pleasant, refreshing taste. The dense peel and the white
                part adjacent to it are not eaten.
              </p>
            </div>
            <div className="slider__item">
              <h3 className="slider__item-name">Rambutan</h3>
              <p className="slider__item-text">
                This fruit has an exotic appearance.
                <img
                  className="slider__item-img"
                  src="./images/slider/slide_2.png"
                  alt="rambutan-fruit"
                />
                Small fruits have a sweet, very pleasant taste. Under the peel with soft curved
                thorns, a dense pulp of a jelly-like consistency is hidden. There is a large bone
                inside it. Be careful when biting the flesh! It is better to use a knife to extract
                the inedible bone.
              </p>
            </div>
            <div className="slider__item">
              <h3 className="slider__item-name">Mangosteen</h3>
              <p className="slider__item-text">
                The brown-violet skin of the passionfruit
                <img
                  className="slider__item-img"
                  src="./images/slider/slide_1.png"
                  alt="passion-fruit"
                />
                is quite dense - the fruit is well stored. The riper the fruit, the more pronounced
                its aroma. Passion fruit is eaten fresh or in the form of juice, jelly. The fruit is
                cut and the pulp with a large number of small seeds is taken out with a spoon. It
                has a sweet and sour, very pleasant, refreshing taste. The dense peel and the white
                part adjacent to it are not eaten.
              </p>
            </div>
            <div className="slider__item">
              <h3 className="slider__item-name">Cherimoya</h3>
              <p className="slider__item-text">
                This fruit has an exotic appearance.
                <img
                  className="slider__item-img"
                  src="./images/slider/slide_2.png"
                  alt="rambutan-fruit"
                />
                Small fruits have a sweet, very pleasant taste. Under the peel with soft curved
                thorns, a dense pulp of a jelly-like consistency is hidden. There is a large bone
                inside it. Be careful when biting the flesh! It is better to use a knife to extract
                the inedible bone.
              </p>
            </div>
          </div>
          <div className="slider__choose">
            <div className="slider__choose-line"></div>
            <div className="slider__choose-dots">
              <div className="slider__choose-dot active">
                <h4 className="slider__choose-name">Passion fruit</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Rambutan</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Mangosteen</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Cherimoya</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Lychee</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Longan</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Guava</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Mango</h4>
                <div className="slider__choose-circle"></div>
              </div>
              <div className="slider__choose-dot">
                <h4 className="slider__choose-name">Papaya</h4>
                <div className="slider__choose-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
