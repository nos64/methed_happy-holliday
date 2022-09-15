import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

 const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  heighr: '100vh',
 };

const App = () => {
  return (
    <div className={wrapper}>
      <Header />
      <Card/>
      <Footer />
    </div>
  );
}

export default App;
