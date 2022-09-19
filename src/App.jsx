import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';
import { HolidayContextProvider } from './context/holidayContext';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  heighr: '100vh',
};

const App = () => {
  return (
    <div className={wrapper}>
    <HolidayContextProvider>
      <ImgContextProvider>
        <TextContextProvider>
          <Header />
          <Card />
          <Footer />
        </TextContextProvider>
      </ImgContextProvider>
    </HolidayContextProvider>
    </div>
  );
}

export default App;
