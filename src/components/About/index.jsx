import React from 'react';

const history = [
  {
    id: 1,
    html: `
      <div class="about__content-years">
        <span class="active">1990</span>
        <span>1992</span>
        <span>1994</span>
        <span>2001</span>
        <span>2014</span>
        <span>2015</span>
        <span>2021</span>
      </div>
      <p class="about__content-desc">
        It all started in 1990, then my father had an idea to create something that he and
        the rest lacked, since in those days very few people could get some quality goods,
        he decided to take everything into his own hands and started act.
      </p>
    `,
  },
  {
    id: 2,
    html: `
      <div class="about__content-years">
        <span>1990</span>
        <span class="active">1992</span>
        <span>1994</span>
        <span>2001</span>
        <span>2014</span>
        <span>2015</span>
        <span>2021</span>
      </div>
      <p class="about__content-desc">
        The first step was building our own team. His team were his friends
        <img
          class="about__content-image"
          src="./images/about/about_1.png"
          alt="about"
        />
        . Together they caught fire on one thing - the delivery of fruits and vegetables
        from abroad. Since there were no such products in the CIS, or there were, but in
        order to get them you had to try.
      </p>
    `,
  },
  {
    id: 3,
    html: `
      <div class="about__content-years">
        <span>1990</span>
        <span>1992</span>
        <span class="active">1994</span>
        <span>2001</span>
        <span>2014</span>
        <span>2015</span>
        <span>2021</span>
      </div>
      <p class="about__content-desc">
        In 1994, my father's team flew to Thailand and started looking for a suitable
        location. After half a year, they found her and bought land there. From the very
        beginning, they grew pineapples
        <img
          class="about__content-image"
          src="./images/about/about_2.png"
          alt="about"
        />
        , but later began to develop and grow other exotic fruits and vegetables.
      </p>    
    `,
  },
  {
    id: 4,
    html: `
      <div class="about__content-years">
       <span>1990</span>
       <span>1992</span>
       <span>1994</span>
       <span class="active">2001</span>
       <span>2014</span>
       <span>2015</span>
       <span>2021</span>
      </div>
      <p class="about__content-desc">
       They later began growing fruits and vegetables in countries other than Thailand,
       such as Brazil and Africa.
      </p>
    `,
  },
  {
    id: 5,
    html: `
      <div class="about__content-years">
        <span>1990</span>
        <span>1992</span>
        <span>1994</span>
        <span>2001</span>
        <span class="active">2014</span>
        <span>2015</span>
        <span>2021</span>
      </div>
      <p class="about__content-desc">
        My father bought the company's shares from his team and transferred the business to
        me.
      </p>
    `,
  },
  {
    id: 6,
    html: `
      <div class="about__content-years">
        <span>1990</span>
        <span>1992</span>
        <span>1994</span>
        <span>2001</span>
        <span>2014</span>
        <span class="active">2015</span>
        <span>2021</span>
      </div>
      <p class="about__content-desc">
        Over the course of a year, my father helped me sort out the business, we improved
        some of its branches, such as: delivery, storage and growing of better products, so
        that we were confident that we were providing you with quality goods. And at the
        end, I assembled my team.
      </p>
    `,
  },
  {
    id: 7,
    html: `
      <div class="about__content-years">
        <span>1990</span>
        <span> - 2021</span>
      </div>
      <p class="about__content-desc">
        We are a team of 8 people
        <img
          class="about__content-image"
          src="./images/about/about_3.png"
          alt="about"
        />
        who share a common goal. Our goal is the sale and fast delivery of exotic fruits and
        vegetables
        <img
          class="about__content-image"
          src="./images/about/about_4.png"
          alt="about"
        />
        to all CIS countries. Since few people can get exotic fruits or vegetables in their
        city. Our stores are located in all large cities of the CIS countries, and we all
        grow on our plantations in Brazil, Thailand and Africa.
      </p>
    `,
  },
];
const adaptiveHistory = [
  {
    id: 1,
    year: '1990',
    desc: `
      It all started in 1990, then my father had an idea to create something that he and
      the rest lacked, since in those days very few people could get some quality goods,
      he decided to take everything into his own hands and started act.
    `,
  },
  {
    id: 2,
    year: '1992',
    desc: `
      The first step was building our own team. His team were his friends
      <img
        class="about__adaptive-image"
        src="./images/about/about_1.png"
        alt="about"
      />
      . Together they caught fire on one thing - the delivery of fruits and vegetables
      from abroad. Since there were no such products in the CIS, or there were, but in
      order to get them you had to try.
    `,
  },
  {
    id: 3,
    year: '1994',
    desc: `
      In 1994, my father's team flew to Thailand and started looking for a suitable
      location. After half a year, they found her and bought land there. From the very
      beginning, they grew pineapples
      <img
        class="about__adaptive-image"
        src="./images/about/about_2.png"
        alt="about"
      />
      , but later began to develop and grow other exotic fruits and vegetables.
    `,
  },
  {
    id: 4,
    year: '2001',
    desc: `
      They later began growing fruits and vegetables in countries other than Thailand,
      such as Brazil and Africa.
    `,
  },
  {
    id: 5,
    year: '2014',
    desc: `
      My father bought the company's shares from his team and transferred the business
      to me.
    `,
  },
  {
    id: 6,
    year: '2015',
    desc: `
      Over the course of a year, my father helped me sort out the business, we improved
      some of its branches, such as: delivery, storage and growing of better products,
      so that we were confident that we were providing you with quality goods. And at
      the end, I assembled my team.
    `,
  },
  {
    id: 7,
    year: '1990 - 2021',
    desc: `
      We are a team of 8 people
      <img
        class="about__adaptive-image"
        src="./images/about/about_3.png"
        alt="about"
      />
      who share a common goal. Our goal is the sale and fast delivery of exotic fruits
      and vegetables
      <img
        class="about__adaptive-image"
        src="./images/about/about_4.png"
        alt="about"
      />
      to all CIS countries. Since few people can get exotic fruits or vegetables in
      their city. Our stores are located in all large cities of the CIS countries, and
      we all grow on our plantations in Brazil, Thailand and Africa.
    `,
  },
];

const About = () => {
  const [activeHistory, setActiveHistory] = React.useState(0);

  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__title">About Us</div>
          <div className="about__swipes">
            <div className="about__swipes-left">Left</div>
            <span className="about__swipes-text">Swipe and Click</span>
            <div className="about__swipes-right">Right</div>
          </div>
          <div className="about__content">
            {history
              .filter((item) => item.id !== history[history.length - 1].id)
              .map((item) => (
                <div
                  className="about__content-block"
                  dangerouslySetInnerHTML={{ __html: item.html }}></div>
              ))}

            <div
              className="about__content-block about__content-block--big"
              dangerouslySetInnerHTML={{ __html: history[history.length - 1].html }}></div>
          </div>
          <div className="about__adaptive">
            <div className="about__adaptive-years">
              {adaptiveHistory.map((item, index) => (
                <span
                  className={activeHistory === index ? 'active' : ''}
                  key={item.id}
                  onClick={() => setActiveHistory(index)}>
                  {item.year}
                </span>
              ))}
            </div>
            <div className="about__adaptive-descriptions">
              <div className="about__adaptive-inner">
                {adaptiveHistory.map((item, index) => (
                  <p
                    key={item.id}
                    className={
                      activeHistory === index
                        ? 'about__adaptive-desc active'
                        : 'about__adaptive-desc'
                    }
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
