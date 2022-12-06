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

  console.log(cartActiveClass);

  return (
    <div className="home">
      <div className="content">
        <div className="home__main">
          <Header setCartActiveClass={setCartActiveClass} />
          <MainScreen />
        </div>
        <Slider />
        <Dialog />
        <Products />
        <Gallery />
        <Application />
        <About />
        <Contact />
        <Cart cartActiveClass={cartActiveClass} setCartActiveClass={setCartActiveClass} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
