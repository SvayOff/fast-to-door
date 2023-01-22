import React from 'react';
import CartProduct from '../CartProduct';

const Cart = ({ cartActiveClass, setCartActiveClass, cartProducts, setCartProducts }) => {
  const [totalCart, setTotalCart] = React.useState([0]);

  return (
    <div className={cartActiveClass === 'active' ? 'cart active' : 'cart'}>
      <div className="cart__background">
        <div className="container">
          <div className="cart__inner">
            <button className="cart__inner-close" onClick={() => setCartActiveClass('')}>
              <img src="./images/icons/close.png" alt="close" />
            </button>
            <div className="cart__products">
              <h2 className="cart__products-title cart__title">Cart</h2>
              <div className="cart__products-box">
                {cartProducts.map((product) => {
                  return (
                    <CartProduct
                      key={product.id}
                      product={product}
                      cartProducts={cartProducts}
                      setCartProducts={setCartProducts}
                    />
                  );
                })}
              </div>
            </div>
            <div className="cart__payment">
              <h2 className="cart__payment-title cart__title">Payment</h2>
              <form className="cart__form">
                <input className="cart__form-input" type="text" placeholder="Name and surname" />
                <input className="cart__form-input" type="text" placeholder="Phone number" />
                <select className="cart__form-select" name="" id="">
                  <option value="">Ukraine</option>
                </select>
                <select className="cart__form-select select-city" name="" id="">
                  <option value="">Kyiv</option>
                  <option value="">Ternopil</option>
                  <option value="">Kharkiv</option>
                  <option value="">Lviv</option>
                </select>
                <div className="cart__form-radio">
                  <input type="radio" id="pickup" name="delivery" value="pickup" />
                  <label htmlFor="pickup">Pickup from Nova Poshta</label>
                </div>
                <div className="cart__form-radio">
                  <input type="radio" id="courier" name="delivery" value="courier" />
                  <label htmlFor="courier">Courier Nova Poshta</label>
                </div>
                <div className="cart__form-radio">
                  <input type="radio" id="fast" name="delivery" value="fast" />
                  <label htmlFor="fast">
                    Fast delivery form FastToDoor
                    <svg
                      className="cart__form-img"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.0027 21.3378C16.7366 21.3414 20.577 17.5067 20.5806 12.7728C20.5842 8.03895 16.7495 4.1985 12.0156 4.19493C7.28177 4.19137 3.44132 8.02603 3.43776 12.7599C3.43419 17.4938 7.26886 21.3342 12.0027 21.3378Z"
                        stroke="#27272B"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0065 16.1957L12.009 12.7671"
                        stroke="#27272B"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0116 9.33936L12.0202 9.33936"
                        stroke="#27272B"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </label>
                </div>
                <select className="cart__form-select" name="" id="">
                  <option value="">Nova Poshta #1, 32 Pyrogivcka street</option>
                  <option value="">Nova Poshta #2, 12 Pochaina street</option>
                  <option value="">Nova Poshta #3, 109H Velyka street</option>
                  <option value="">Nova Poshta #4 Bohdan Khmelnytskyi street</option>
                </select>
              </form>
              <div className="cart__total">
                <h3 className="cart__total-title">Total:</h3>
                <span className="cart__total-price">{totalCart} $</span>
              </div>
              <button className="cart__total-btn" type="submit">
                Will pay and order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
