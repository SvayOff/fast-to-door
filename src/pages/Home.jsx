import Header from '../components/Header';
import MainScreen from '../components/MainScreen';
import styles from './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home__main">
        <Header />
        <MainScreen />
      </div>
    </div>
  );
};

export default Home;
