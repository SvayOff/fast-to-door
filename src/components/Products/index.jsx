import React from 'react';
import Product from '../Product';
import ProductSkeleton from '../ProductSkeleton';

import styles from '../../libs/style.scss';

const Products = ({
  products,
  cartProducts,
  setCartProducts,
  searchValue,
  setSearchValue,
  loadingSkeleton,
}) => {
  const mainProducts = products
    .filter((product) => {
      if (product.titleProduct.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((product) => {
      return (
        <Product
          key={product.id}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          product={product}
        />
      );
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
            <input
              className="products__search"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
            />
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
