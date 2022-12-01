import style from './Application.scss';

const Application = () => {
  return (
    <div className="application">
      <div className="container">
        <div className="application__inner">
          <div className="application__title">Application</div>
          <div className="application__desc">
            Fast shopping, instant support and free tickets for two to Thailand. Everything is in
            our application.
          </div>
          <div className="application__content">
            <div className="application__content-block">
              <div className="application__content-info">
                <h4 className="application__content-title">Not only vegetables and fruits</h4>
                <div className="application__content-desc">
                  We also deliver various products from abroad, which you most likely cannot find in
                  your city.
                </div>
              </div>
              <img
                className="application__content-image"
                src="./images/application/app_1.png"
                alt="app_picture"
              />
            </div>
            <div className="application__content-block">
              <img
                className="application__content-image"
                src="./images/application/app_2.png"
                alt="app_picture"
              />
              <div className="application__content-info">
                <h4 className="application__content-title">Convenience</h4>
                <div className="application__content-desc">
                  Create and save a list of your favorites so you can order them quickly later.
                </div>
              </div>
            </div>
            <div className="application__content-block">
              <div className="application__content-info">
                <h4 className="application__content-title">Privileges for regular customers</h4>
                <div className="application__content-desc">
                  Earn points for every purchase and upgrade your status and win a tour for two to
                  Thailand.
                </div>
              </div>
              <img
                className="application__content-image"
                src="./images/application/app_3.png"
                alt="app_picture"
              />
            </div>
            <div className="application__content-block">
              <img
                className="application__content-image"
                src="./images/application/app_4.png"
                alt="app_picture"
              />
              <div className="application__content-info">
                <h4 className="application__content-title">Correct selection of products</h4>
                <div className="application__content-desc">
                  With filters and additional information, you can find the diet foods you need.
                </div>
              </div>
            </div>
            <div className="application__content-block">
              <img
                className="application__content-image"
                src="./images/application/app_5.png"
                alt="app_picture"
              />
              <div className="application__content-desc">
                Download on platforms convenient for you
              </div>
              <a className="application__content-link apple" href="#">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.2692 19.1251C15.3701 20.4684 14.4167 21.7792 12.9651 21.8009C11.5134 21.8334 11.0476 20.9451 9.40091 20.9451C7.74341 20.9451 7.23425 21.7792 5.85841 21.8334C4.43925 21.8876 3.36675 20.4034 2.45675 19.0926C0.604246 16.4167 -0.814921 11.4876 1.09175 8.17258C2.03425 6.52592 3.72425 5.48592 5.55508 5.45342C6.94175 5.43175 8.26341 6.39591 9.11925 6.39591C9.96425 6.39591 11.5676 5.23675 13.2467 5.41008C13.9509 5.44258 15.9226 5.69175 17.1901 7.55508C17.0926 7.62008 14.8392 8.94175 14.8609 11.6826C14.8934 14.9542 17.7317 16.0484 17.7642 16.0592C17.7317 16.1351 17.3092 17.6192 16.2692 19.1251ZM10.0834 1.79175C10.8742 0.892581 12.1851 0.210081 13.2684 0.166748C13.4092 1.43425 12.9001 2.71258 12.1417 3.62258C11.3942 4.54341 10.1592 5.25842 8.94591 5.16092C8.78341 3.91508 9.39008 2.61508 10.0834 1.79175Z"
                    fill="#292926"
                  />
                </svg>
                App Store
              </a>
              <a className="application__content-link store" href="#">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.5 18.4999V1.4999C0.5 0.909902 0.84 0.389902 1.34 0.149902L11.19 9.9999L1.34 19.8499C0.84 19.5999 0.5 19.0899 0.5 18.4999ZM14.31 13.1199L3.55 19.3399L12.04 10.8499L14.31 13.1199ZM17.66 8.8099C18 9.0799 18.25 9.4999 18.25 9.9999C18.25 10.4999 18.03 10.8999 17.68 11.1799L15.39 12.4999L12.89 9.9999L15.39 7.4999L17.66 8.8099ZM3.55 0.659902L14.31 6.8799L12.04 9.1499L3.55 0.659902Z"
                    fill="#292926"
                  />
                </svg>
                Play Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
