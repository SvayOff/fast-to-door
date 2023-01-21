import React from 'react';
import Product from '../Product';
import ProductSkeleton from '../ProductSkeleton';
import Sort from '../Sort';
import debounce from 'lodash.debounce';

import styles from '../../libs/style.scss';

const Products = ({ products, setCartProducts, searchValue, setSearchValue, loadingSkeleton }) => {
  const [searchLocalValue, setSearchLocalValue] = React.useState('');

  const onChangeSearch = (event) => {
    setSearchLocalValue(event.target.value);
    updateSearch(event.target.value);
  };

  const updateSearch = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 350),
    [],
  );

  const mainProducts = products
    .filter((product) => {
      if (product.titleProduct.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((product) => {
      return <Product key={product.id} setCartProducts={setCartProducts} product={product} />;
    });

  const skeletonProducts = [...new Array(8)].map((_, index) => {
    return <ProductSkeleton key={index} />;
  });

  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="products__top">
            <h2 className="products__title">Our products</h2>
            <Sort />
            <div className="products__search">
              <input
                className="products__search-input"
                type="text"
                placeholder="Search..."
                value={searchLocalValue}
                onChange={(event) => onChangeSearch(event)}
              />
              {searchLocalValue && (
                <span className="products__search-clear" onClick={() => setSearchValue('')}>
                  <svg
                    enableBackground="new 0 0 32 32"
                    height="20px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 32 32"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <polyline
                        fill="none"
                        points="   649,137.999 675,137.999 675,155.999 661,155.999  "
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <polyline
                        fill="none"
                        points="   653,155.999 649,155.999 649,141.999  "
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                      <polyline
                        fill="none"
                        points="   661,156 653,162 653,156  "
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                      />
                    </g>
                    <g>
                      <path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z" />
                      <path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z" />
                    </g>
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className="products__items">{loadingSkeleton ? skeletonProducts : mainProducts}</div>
          <a className="products__link" href="#">
            Is there anything else?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
