import styles from './MainScreen.scss';

const MainScreen = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__inner">
          <div className="main__block main__block-first">
            <div className="main__row main__row-first">
              <h1>Delivery exotic</h1>
            </div>
            <div className="main__row main__row-second">
              <h2>vegetables</h2>
              <img
                className="main__row main__row-img main__row-kivano"
                src="./images/main/kivano-fruit.png"
                alt="kivano-fruit"
              />
            </div>
            <div className="main__row main__row-three">
              <img
                className="main__row-img main__row-lichi"
                src="./images/main/lichi-fruit.png"
                alt=""
              />
              <p className="main__row-text">
                Papaya, passionfruit, durian and other delicious exotic fruits and vegetables you
                haven't tried yet. We deliver free of charge to all CIS countries, without a minimum
                order amount.
              </p>
              <h2>and</h2>
            </div>
            <div className="main__row main__row-four">
              <h2>fruit</h2>
            </div>
          </div>
          <div className="main__block main__block-second">
            <div className="main__block-img">
              <img src="./images/main/pineapple-fruit.png" alt="pineapple-fruit" />
            </div>
            <div className="main__block-col">
              <p className="main__block-text">Our delivery is better than competitors on</p>
              <h2 className="main__block-count">100%</h2>
              <p className="main__block-desc">
                We pack all products in wooden boxes that store the required temperature for
                delivery in 3-7 days.
              </p>
            </div>
            <div className="main__block-col">
              <p className="main__block-text">Among all grocery delivery companies, we occupy</p>
              <h2 className="main__block-count">
                4 <span>place</span>
              </h2>
              <p className="main__block-desc">
                We are among the top 10 companies in the CIS for the quality of the products we
                grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
