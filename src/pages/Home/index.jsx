import React from 'react';
import qs from 'qs';

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
import { sortList } from '../../components/Sort';

import { setFilter } from '../../redux/slices/filterSlice';
import { setProducts } from '../../redux/slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortProperty = useSelector((state) => state.filterSlice.sort.sortProperty);
  const isAddedToCart = useSelector((state) => state.cartSlice.isAddedToCart);
  const products = useSelector((state) => state.productsSlice.products);
  const [cards, setCards] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [loadingSkeleton, setLoadingSkeleton] = React.useState(true);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const search = searchValue ? `&search=${searchValue}` : '';
  const sortBy = `products?sortBy=${sortProperty.replace('-', '')}`;
  const order = `&order=${sortProperty.includes('-') ? 'asc' : 'desc'}`;

  const fetchProduct = () => {
    setLoadingSkeleton(true);

    fetch(`https://638f959f9cbdb0dbe32c1137.mockapi.io/${sortBy}${order}${search}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((products) => {
        setLoadingSkeleton(false);
        dispatch(setProducts(products));
      });
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [sortProperty]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(setFilter({ sort }));

      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchProduct();
    }
    isSearch.current = false;
  }, [sortProperty]);

  React.useEffect(() => {
    fetch('https://638f959f9cbdb0dbe32c1137.mockapi.io/cards', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((cards) => setCards(cards));
  }, []);

  return (
    <div className="home">
      <div className="content">
        <div className="home__main">
          <Header />

          <MainScreen />
        </div>
        <Slider />

        <Dialog />

        <Products
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loadingSkeleton={loadingSkeleton}
        />

        <Gallery cards={cards} />

        <Application />

        <About />

        <Contact />

        <Cart />
      </div>
      <div className={isAddedToCart ? 'purchased show' : 'purchased hidden'}>Added to Cart</div>
      <Footer />
    </div>
  );
};

export default Home;
