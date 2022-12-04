import styles from '../../libs/style.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__inner">
          <h2 className="contact__title">Contacts</h2>
          <div className="contact__content">
            <div className="contact__note">
              <h2 className="contact__note-title">Feedback</h2>
              <p className="contact__note-desc">We will call you back within 5 minutes.</p>
              <form className="contact__note-form">
                <input className="contact__note-input" type="text" placeholder="Name" />
                <input className="contact__note-input" type="phone" placeholder="Phone number" />
              </form>
              <div className="contact__note-other">
                <button className="contact__note-btn" type="submit">
                  Send message
                </button>
                <span>or</span>
                <ul className="contact__note-social">
                  <li>
                    <a href="#">
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.82649 2.99982L4.70649 7.61315L6.39983 8.86648L9.15983 10.9065C9.66649 11.1865 10.0332 11.0398 10.1598 10.4331L11.9732 1.89315C12.1598 1.14648 11.6932 0.806482 11.2065 1.02648L0.559826 5.13315C-0.166841 5.42648 -0.160174 5.83315 0.426493 5.99982L3.15983 6.86648L9.47983 2.87315C9.77983 2.69315 10.0532 2.79315 9.82649 2.99982Z"
                          fill="#F4F4EC"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.20016 0.333008H9.80016C11.9335 0.333008 13.6668 2.06634 13.6668 4.19967V9.79967C13.6668 10.8252 13.2594 11.8087 12.5343 12.5338C11.8092 13.259 10.8257 13.6663 9.80016 13.6663H4.20016C2.06683 13.6663 0.333496 11.933 0.333496 9.79967V4.19967C0.333496 3.17417 0.740876 2.19067 1.46602 1.46553C2.19116 0.740388 3.17466 0.333008 4.20016 0.333008ZM4.06683 1.66634C3.43031 1.66634 2.81986 1.9192 2.36977 2.36928C1.91969 2.81937 1.66683 3.42982 1.66683 4.06634V9.93301C1.66683 11.2597 2.74016 12.333 4.06683 12.333H9.9335C10.57 12.333 11.1805 12.0802 11.6306 11.6301C12.0806 11.18 12.3335 10.5695 12.3335 9.93301V4.06634C12.3335 2.73967 11.2602 1.66634 9.9335 1.66634H4.06683ZM10.5002 2.66634C10.7212 2.66634 10.9331 2.75414 11.0894 2.91042C11.2457 3.0667 11.3335 3.27866 11.3335 3.49967C11.3335 3.72069 11.2457 3.93265 11.0894 4.08893C10.9331 4.24521 10.7212 4.33301 10.5002 4.33301C10.2791 4.33301 10.0672 4.24521 9.91091 4.08893C9.75463 3.93265 9.66683 3.72069 9.66683 3.49967C9.66683 3.27866 9.75463 3.0667 9.91091 2.91042C10.0672 2.75414 10.2791 2.66634 10.5002 2.66634ZM7.00016 3.66634C7.88422 3.66634 8.73206 4.01753 9.35719 4.64265C9.98231 5.26777 10.3335 6.11562 10.3335 6.99967C10.3335 7.88373 9.98231 8.73158 9.35719 9.3567C8.73206 9.98182 7.88422 10.333 7.00016 10.333C6.11611 10.333 5.26826 9.98182 4.64314 9.3567C4.01802 8.73158 3.66683 7.88373 3.66683 6.99967C3.66683 6.11562 4.01802 5.26777 4.64314 4.64265C5.26826 4.01753 6.11611 3.66634 7.00016 3.66634ZM7.00016 4.99967C6.46973 4.99967 5.96102 5.21039 5.58595 5.58546C5.21088 5.96053 5.00016 6.46924 5.00016 6.99967C5.00016 7.53011 5.21088 8.03882 5.58595 8.41389C5.96102 8.78896 6.46973 8.99967 7.00016 8.99967C7.5306 8.99967 8.0393 8.78896 8.41438 8.41389C8.78945 8.03882 9.00016 7.53011 9.00016 6.99967C9.00016 6.46924 8.78945 5.96053 8.41438 5.58546C8.0393 5.21039 7.5306 4.99967 7.00016 4.99967Z"
                          fill="#F4F4EC"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact__info">
              <div className="contact__info-block">
                <h4 className="contact__info-title">Our contacts UA</h4>
                <p className="contact__info-text contact__info-street">Kiev, st. Polish, 28</p>
                <a className="contact__info-text contact__info-phone" href="tel:0880203232">
                  0 880 203 232
                </a>
              </div>
              <div className="contact__info-block">
                <h4 className="contact__info-title">Our contacts USA</h4>
                <p className="contact__info-text contact__info-street">California, st.Greit, 12H</p>
                <a className="contact__info-text contact__info-phone" href="tel:0880203232">
                  0 880 203 232
                </a>
              </div>
              <div className="contact__info-block">
                <h4 className="contact__info-title">E-mail</h4>
                <a
                  className="contact__info-text contact__info-mail"
                  href="mailto:fast2door@gmail.com">
                  mailto:fast2door@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
