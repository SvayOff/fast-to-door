import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import Slider from '../components/Slider';
import Dialog from '../components/Dialog';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Application from '../components/Application';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
      <Application />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
