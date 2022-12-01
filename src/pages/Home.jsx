import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import Slider from '../components/Slider';
import Dialog from '../components/Dialog';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import styles from './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
        <Header />
        <MainScreen />
      </div>
      <Slider />
      <Dialog />
      <Products />
      <Gallery />
    </div>
  );
};

export default Home;
