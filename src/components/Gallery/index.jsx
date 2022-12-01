import styles from './Gallery.scss';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__inner">
          <div className="gallery__title">Gallery</div>
          <div className="gallery__items">
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_1.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_2.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_3.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_4.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_5.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_6.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_7.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_8.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
            <div
              className="gallery__item"
              style={{ backgroundImage: 'url(./images/backgrounds/Background_3.png)' }}>
              <img
                className="gallery__item-img"
                src="./images/gallery/gallery_9.png"
                alt="gallery"
              />
              <p className="gallery__item-desc">
                Fresh lime. Someone will soon be adding it to tequila.
              </p>
              <span className="gallery__item-date">2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
