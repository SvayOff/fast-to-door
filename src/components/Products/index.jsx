import React from 'react';
import Product from '../Product';

import styles from '../../libs/style.scss';

const Products = ({ products, cartProducts, setCartProducts }) => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="products__top">
            <h2 className="products__title">Our products</h2>
            <input className="products__search" type="text" placeholder="Search..." />
          </div>
          <div className="products__items">
            {products.map((product) => {
              return (
                <Product
                  key={product.id}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                  product={product}
                />
              );
            })}
          </div>
          <a className="products__link" href="#">
            Is there anything else?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
