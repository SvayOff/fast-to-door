import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    slideName: 'Passion fruit',
    slideDesc: `
      The brown-violet skin of the passionfruit  
      <img 
        class="slider__item-img"
        src="./images/slider/slide_1.png"
        alt="passion-fruit" 
      />
      is quite dense - the fruit is well stored. The riper the fruit, the more pronounced
      its aroma. Passion fruit is eaten fresh or in the form of juice, jelly. The fruit is
      cut and the pulp with a large number of small seeds is taken out with a spoon. It
      has a sweet and sour, very pleasant, refreshing taste. The dense peel and the white
      part adjacent to it are not eaten.
  `,
  },

  {
    id: 2,
    slideName: 'Rambutan',
    slideDesc: `
      This fruit has an exotic appearance.
      <img
        class="slider__item-img"
        src="./images/slider/slide_2.png"
        alt="rambutan-fruit"
      />
      Small fruits have a sweet, very pleasant taste. Under the peel with soft curved
      thorns, a dense pulp of a jelly-like consistency is hidden. There is a large bone
      inside it. Be careful when biting the flesh! It is better to use a knife to extract
      the inedible bone.
  `,
  },

  {
    id: 3,
    slideName: `Mangosteen`,
    slideDesc: `
      The brown-violet skin of the passionfruit
      <img
        class="slider__item-img"
        src="./images/slider/slide_1.png"
        alt="passion-fruit"
      />
      is quite dense - the fruit is well stored. The riper the fruit, the more pronounced
      its aroma. Passion fruit is eaten fresh or in the form of juice, jelly. The fruit is
      cut and the pulp with a large number of small seeds is taken out with a spoon. It
      has a sweet and sour, very pleasant, refreshing taste. The dense peel and the white
      part adjacent to it are not eaten.
    `,
  },

  {
    id: 4,
    slideName: `Cherimoya`,
    slideDesc: `
      This fruit has an exotic appearance.
      <img
        class="slider__item-img"
        src="./images/slider/slide_2.png"
        alt="rambutan-fruit"
      />
      Small fruits have a sweet, very pleasant taste. Under the peel with soft curved
      thorns, a dense pulp of a jelly-like consistency is hidden. There is a large bone
      inside it. Be careful when biting the flesh! It is better to use a knife to extract
      the inedible bone.
    `,
  },

  {
    id: 5,
    slideName: `Lychee`,
    slideDesc: `
    An evergreen tree with a height of 10-30 meters (usually up to 15 meters), with a spreading crown. The leaves are complex, pinnate (rarely they are odd pinnate),
    <img
    class="slider__item-img"
    src="./images/slider/slide_2.png"
    alt="rambutan-fruit"
  /> consist of 4-8 elongated-ovate or lanceolate leaflets with a pointed end.
    `,
  },

  {
    id: 6,
    slideName: `Longan`,
    slideDesc: `
    Dimocarpus longan, commonly known as the longan and dragon's eye, is a tropical tree species that produces edible fruit. It is one of the better-known tropical members of the soapberry family Sapindaceae, to which the lychee and rambutan also belong.
    `,
  },
  {
    id: 7,
    slideName: `Guava`,
    slideDesc: `
    Guava is a common tropical fruit cultivated in many tropical and subtropical regions. The common guava Psidium guajava (lemon guava, apple guava) is a small tree in the myrtle family (Myrtaceae), native to Mexico, Central America,
    `,
  },
  {
    id: 8,
    slideName: `Mango`,
    slideDesc: `
    A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in South and Southeast Asia
    `,
  },
  {
    id: 9,
    slideName: `Papaya`,
    slideDesc: `
    Carica papaya is the scientific name of the orange and green fruit known more commonly as papaya. It tastes sweet and has a soft texture that many find appealing. 
    `,
  },
  {
    id: 10,
    slideName: ``,
    slideDesc: `
    `,
  },
];

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__inner">
          <h2 id="howtoeat" className="slider__title">
            How to consume exotic fruits?
          </h2>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={50}
            centeredSlides={false}
            grabCursor={true}
            modules={[Pagination]}
            slidesPerGroupAuto={true}
            pagination={{
              clickable: true,
              type: 'bullets',
              bulletClass: 'slider__choose-dot',
              bulletActiveClass: 'active',
              renderBullet: function (index) {
                return `
                  <div class="slider__choose-dot">
                      <h4 class="slider__choose-name">${slides[index].slideName}</h4>
                      <div class="slider__choose-circle">"${index + 1}"</div>
                  </div>
                  `;
              },
            }}
            className="slider__box">
            {slides.map((slide) => (
              <SwiperSlide>
                <div className="slider__item" key={slide.id}>
                  <h3 className="slider__item-name">{slide.slideName}</h3>
                  <p
                    className="slider__item-text"
                    dangerouslySetInnerHTML={{ __html: slide.slideDesc }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider__choose">
            <div className="slider__choose-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
