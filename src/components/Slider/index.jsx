import React from 'react';
import Slide from '../Slide';
import SlideDot from '../SlideDot';

const slides = [
  {
    id: 1,
    slideName: 'Passion fruit',
    slideDesc: `
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
  `,
  },

  {
    id: 2,
    slideName: 'Rambutan',
    slideDesc: `
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
  `,
  },

  {
    id: 2,
    slideName: `Mangosteen`,
    slideDesc: `
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
    `,
  },

  {
    id: 3,
    slideName: `Cherimoya`,
    slideDesc: `
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
    `,
  },

  {
    id: 4,
    slideName: `Lychee`,
    slideDesc: `
    An evergreen tree with a height of 10-30 meters (usually up to 15 meters), with a spreading crown. The leaves are complex, pinnate (rarely they are odd pinnate), consist of 4-8 elongated-ovate or lanceolate leaflets with a pointed end.
    `,
  },

  {
    id: 5,
    slideName: `Longan`,
    slideDesc: `
    Dimocarpus longan, commonly known as the longan and dragon's eye, is a tropical tree species that produces edible fruit. It is one of the better-known tropical members of the soapberry family Sapindaceae, to which the lychee and rambutan also belong.
    `,
  },
  {
    id: 6,
    slideName: `Guava`,
    slideDesc: `
    Guava is a common tropical fruit cultivated in many tropical and subtropical regions. The common guava Psidium guajava (lemon guava, apple guava) is a small tree in the myrtle family (Myrtaceae), native to Mexico, Central America,
    `,
  },
  {
    id: 7,
    slideName: `Mango`,
    slideDesc: `
    A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India. M. indica has been cultivated in South and Southeast Asia
    `,
  },
  {
    id: 8,
    slideName: `Papaya`,
    slideDesc: `
    Carica papaya is the scientific name of the orange and green fruit known more commonly as papaya. It tastes sweet and has a soft texture that many find appealing. 
    `,
  },
];

const dots = [
  { id: 1, dotName: 'Passion fruit' },
  { id: 2, dotName: 'Rambutan' },
  { id: 3, dotName: 'Mangosteen' },
  { id: 4, dotName: 'Cherimoya' },
  { id: 5, dotName: 'Lychee' },
  { id: 5, dotName: 'Longan' },
  { id: 5, dotName: 'Guava' },
  { id: 5, dotName: 'Mango' },
  { id: 5, dotName: 'Papaya' },
];

const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__inner">
          <h2 className="slider__title">How to consume exotic fruits?</h2>
          <div className="slider__box">
            {slides.map((slide) => (
              <Slide slide={slide} />
            ))}
          </div>
          <div className="slider__choose">
            <div className="slider__choose-line"></div>
            <div className="slider__choose-dots">
              {dots.map((dot) => (
                <SlideDot key={dot.id} dot={dot} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
