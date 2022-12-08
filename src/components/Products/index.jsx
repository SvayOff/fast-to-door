import Product from '../Product';
import styles from '../../libs/style.scss';

const Products = ({ products, setCartProducts }) => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <h2 className="products__title">Our products</h2>
          <div className="products__items">
            {products.map((product) => {
              return (
                <Product key={product.id} setCartProducts={setCartProducts} product={product} />
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
