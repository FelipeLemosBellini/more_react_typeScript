import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Skils from './Components/Skils/Skils';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skils />
      <div style={{ height: '100px' }}>
      </div>
      <Footer />
    </div>
  );
}

export default App;
