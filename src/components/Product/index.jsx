import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, calcTotalCartPrice } from '../../redux/slices/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cartSlice.cartProducts);

  const addToCart = (product) => {
    dispatch(addProductToCart(product));

    dispatch(calcTotalCartPrice());
  };

  return (
    <div className="products__item">
      <img className="products__item-package" src="./images/products/package.png" alt="package" />
      <img className="products__item-union" src="./images/products/union.png" alt="union" />
      <img className="products__item-pin" src="./images/icons/pin.png" alt="pin" />
      <button className="products__item-cart" type="button" onClick={() => addToCart(product)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.44379 12.9298H6.4447C6.44546 12.9298 6.44623 12.9297 6.44699 12.9297H17.0703C17.3318 12.9297 17.5618 12.7562 17.6337 12.5047L19.9774 4.30161C20.0279 4.12476 19.9925 3.93463 19.8819 3.78784C19.7711 3.64105 19.5979 3.55469 19.4141 3.55469H5.09247L4.67361 1.66977C4.61395 1.40167 4.37622 1.21094 4.10156 1.21094H0.585937C0.262299 1.21094 0 1.47324 0 1.79688C0 2.12051 0.262299 2.38281 0.585937 2.38281H3.63159C3.70575 2.71683 5.63599 11.403 5.74707 11.9028C5.12436 12.1735 4.6875 12.7943 4.6875 13.5156C4.6875 14.4849 5.47607 15.2734 6.44531 15.2734H17.0703C17.3939 15.2734 17.6562 15.0111 17.6562 14.6875C17.6562 14.3639 17.3939 14.1016 17.0703 14.1016H6.44531C6.12228 14.1016 5.85937 13.8387 5.85937 13.5156C5.85937 13.1931 6.12137 12.9306 6.44379 12.9298ZM18.6372 4.72656L16.6283 11.7578H6.91528L5.35278 4.72656H18.6372Z"
            fill="#F9F5F0"
          />
          <path
            d="M5.85938 17.0312C5.85938 18.0005 6.64795 18.7891 7.61719 18.7891C8.58643 18.7891 9.375 18.0005 9.375 17.0312C9.375 16.062 8.58643 15.2734 7.61719 15.2734C6.64795 15.2734 5.85938 16.062 5.85938 17.0312ZM7.61719 16.4453C7.94022 16.4453 8.20312 16.7082 8.20312 17.0312C8.20312 17.3543 7.94022 17.6172 7.61719 17.6172C7.29416 17.6172 7.03125 17.3543 7.03125 17.0312C7.03125 16.7082 7.29416 16.4453 7.61719 16.4453Z"
            fill="#F9F5F0"
          />
          <path
            d="M14.1406 17.0312C14.1406 18.0005 14.9292 18.7891 15.8984 18.7891C16.8677 18.7891 17.6562 18.0005 17.6562 17.0312C17.6562 16.062 16.8677 15.2734 15.8984 15.2734C14.9292 15.2734 14.1406 16.062 14.1406 17.0312ZM15.8984 16.4453C16.2215 16.4453 16.4844 16.7082 16.4844 17.0312C16.4844 17.3543 16.2215 17.6172 15.8984 17.6172C15.5754 17.6172 15.3125 17.3543 15.3125 17.0312C15.3125 16.7082 15.5754 16.4453 15.8984 16.4453Z"
            fill="#F9F5F0"
          />
        </svg>
      </button>
      <img className="products__item-fruit" src={product.imgUrl} alt="product" />
      <div className="products__item-info">
        {product.pricePiece} $ / pc ({product.weight})
      </div>
    </div>
  );
};

export default Product;
