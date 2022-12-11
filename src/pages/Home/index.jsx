import React from 'react';

import Header from '../../components/Header';
import MainScreen from '../../components/MainScreen';
import Slider from '../../components/Slider';
import Dialog from '../../components/Dialog';
import Products from '../../components/Products';
import Gallery from '../../components/Gallery';
import Application from '../../components/Application';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';

import styles from '../../libs/style.scss';

const Home = () => {
  const [cartActiveClass, setCartActiveClass] = React.useState('');

  const [products, setProducts] = React.useState([]);

  const [cards, setCards] = React.useState([]);

  const [cartProducts, setCartProducts] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const search = searchValue ? `search=${searchValue}` : '';

  console.log(products);

  React.useEffect(() => {
    fetch(`https://638f959f9cbdb0dbe32c1137.mockapi.io/products?${search}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setProducts(products);
      });

    fetch('https://638f959f9cbdb0dbe32c1137.mockapi.io/cards', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setCards(cards);
      });
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="home__main">
          <Header setCartActiveClass={setCartActiveClass} />

          <MainScreen />
        </div>
        <Slider />

        <Dialog />

        <Products
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <Gallery cards={cards} />

        <Application />

        <About />

        <Contact />

        <Cart
          cartActiveClass={cartActiveClass}
          setCartActiveClass={setCartActiveClass}
          cartProducts={cartProducts}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
