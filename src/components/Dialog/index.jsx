import styles from '../../libs/style.scss';

const Dialog = () => {
  return (
    <div className="dialog">
      <div className="container">
        <div className="dialog__inner">
          <div className="dialog__images">
            <img
              className="dialog__images-plantation"
              src="./images/dialog/plantation.png"
              alt="plantation"
            />
            <img className="dialog__images-ananas" src="./images/dialog/ananas.png" alt="ananas" />
            <div className="dialog__table">
              <p className="dialog__table-text">Our first pineapple plantation 1982</p>
            </div>
          </div>
          <div className="dialog__messages">
            <p className="dialog__message dialog__text">
              - You know ... At first we grew only pineapples in Thailand and then as it started, we
              sowed the whole field. They are juicy, sweet and simply delicious pineapples. Will you
              try?
            </p>
            <a className="dialog__message dialog__link" href="#">
              I'll try. <span>(Add to cart)</span>
            </a>
            <a className="dialog__message dialog__link" href="#">
              What else is there?<span>(To catalog)</span>
            </a>
            <img
              className="dialog__decor dialog__decor-first"
              src="./images/dialog/piece-ananas.png"
              alt="piece-ananas"
            />
            <img
              className="dialog__decor dialog__decor-second"
              src="./images/dialog/piece-ananas.png"
              alt="piece-ananas"
            />
            <img
              className="dialog__decor dialog__decor-third"
              src="./images/dialog/piece-ananas.png"
              alt="piece-ananas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
