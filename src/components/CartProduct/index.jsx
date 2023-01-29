import { useDispatch } from 'react-redux';
import {
  removeProductFromCart,
  calcTotalCartPrice,
  plusProductCart,
  minusProductCart,
} from '../../redux/slices/cartSlice';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeProductFromCart(id));

    dispatch(calcTotalCartPrice());
  };

  const onClickPlus = (id) => {
    dispatch(plusProductCart(product.id));
    dispatch(calcTotalCartPrice());
  };

  const onClickMinus = () => {
    dispatch(minusProductCart(product.id));
    dispatch(calcTotalCartPrice());
  };

  return (
    <div className="cart__product">
      <img className="cart__product-package" src="./images/products/package.png" alt="package" />
      <img className="cart__product-union" src="./images/products/union.png" alt="union" />
      <img className="cart__product-pin" src="./images/icons/pin.png" alt="pin" />
      <button
        className="cart__product-trash"
        type="button"
        onClick={() => {
          removeFromCart(product.id);
        }}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.58516 9.69775C8.58516 9.394 8.33891 9.14775 8.03516 9.14775C7.7314 9.14775 7.48516 9.394 7.48516 9.69775H8.58516ZM7.48516 17.1102C7.48516 17.4139 7.7314 17.6602 8.03516 17.6602C8.33891 17.6602 8.58516 17.4139 8.58516 17.1102H7.48516ZM7.48516 9.69775V17.1102H8.58516V9.69775H7.48516Z"
            fill="#27272A"
          />
          <path
            d="M11.55 9.69775C11.55 9.394 11.3038 9.14775 11 9.14775C10.6962 9.14775 10.45 9.394 10.45 9.69775H11.55ZM10.45 17.1102C10.45 17.4139 10.6962 17.6602 11 17.6602C11.3038 17.6602 11.55 17.4139 11.55 17.1102H10.45ZM10.45 9.69775V17.1102H11.55V9.69775H10.45Z"
            fill="#27272A"
          />
          <path
            d="M14.5151 9.69775C14.5151 9.394 14.2688 9.14775 13.9651 9.14775C13.6613 9.14775 13.4151 9.394 13.4151 9.69775H14.5151ZM13.4151 17.1102C13.4151 17.4139 13.6613 17.6602 13.9651 17.6602C14.2688 17.6602 14.5151 17.4139 14.5151 17.1102H13.4151ZM13.4151 9.69775V17.1102H14.5151V9.69775H13.4151Z"
            fill="#27272A"
          />
          <path
            d="M3.64351 5.27393C3.64351 4.47311 4.29269 3.82393 5.09351 3.82393H16.9066C17.7074 3.82393 18.3566 4.47311 18.3566 5.27393V6.72137C18.3566 6.9699 18.1552 7.17137 17.9066 7.17137H4.09351C3.84498 7.17137 3.64351 6.9699 3.64351 6.72137V5.27393Z"
            stroke="#27272A"
            strokeWidth="1.1"
          />
          <path
            d="M8.58516 3.1001C8.58516 2.29928 9.23434 1.6501 10.0352 1.6501H11.9651C12.7659 1.6501 13.4151 2.29929 13.4151 3.1001V3.81156H8.58516V3.1001Z"
            stroke="#27272A"
            strokeWidth="1.1"
          />
          <path
            d="M5.48603 18.6727L4.67247 7.28291H17.3276L16.514 18.6727C16.4598 19.4315 15.8284 20.0194 15.0677 20.0194H6.93235C6.17162 20.0194 5.54023 19.4315 5.48603 18.6727Z"
            stroke="#27272A"
            strokeWidth="1.1"
          />
        </svg>
      </button>
      <img className="cart__product-fruit" src={product.imgUrl} alt="product" />
      <h3 className="cart__product-title">
        {product.titleProduct}, {product.pieces} pc ({product.weight})
      </h3>
      <div className="cart__product-info">
        <div className="cart__product-counter">
          <button onClick={onClickMinus} type="button" className="cart__product-minus">
            <svg
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect y="0.220215" width="14" height="1.55556" rx="0.631579" fill="#292926" />
            </svg>
          </button>
          <div className="cart__product-count">
            <span>{product.count}</span> pc
          </div>
          <button onClick={onClickPlus} type="button" className="cart__product-plus">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.0239 7.17272e-05L7.0001 3.06131e-09L6.97629 7.17272e-05C6.56228 0.00574338 6.22803 0.339989 6.22236 0.754L6.22229 0.777805L6.22229 6.22196L0.777805 6.22196L0.754 6.22203C0.339989 6.2277 0.00574337 6.56195 7.17211e-05 6.97596L-3.06161e-09 6.99976L7.17211e-05 7.02357C0.00574337 7.43758 0.339989 7.77182 0.754 7.77749L0.777805 7.77757L6.22229 7.77757L6.22229 13.2227L6.22236 13.2465C6.22803 13.6605 6.56228 13.9947 6.97629 14.0004L7.0001 14.0005L7.0239 14.0004C7.43791 13.9947 7.77216 13.6605 7.77783 13.2465L7.7779 13.2227L7.7779 7.77757L13.2227 7.77757L13.2465 7.77749C13.6605 7.77182 13.9947 7.43758 14.0004 7.02357L14.0005 6.99976L14.0004 6.97596C13.9947 6.56195 13.6605 6.2277 13.2465 6.22203L13.2227 6.22196L7.7779 6.22196L7.7779 0.777805L7.77783 0.754C7.77216 0.339989 7.43791 0.00574338 7.0239 7.17272e-05Z"
                fill="#292926"
              />
            </svg>
          </button>
        </div>
        <span className="cart__product-price">
          {product.count > 1 ? product.priceFull.toFixed(2) : product.pricePiece.toFixed(2)} $
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
