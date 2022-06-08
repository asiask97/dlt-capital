import './App.css';
import NavBar from '../NavBar/NavBar.js';
import Hero from '../Hero/Hero.js';
import MainContent from '../MainContent/MainContent';
import Contact_Us from '../Contact_Us/Contact_Us';


function App() {
    /*useEffect(() => {
    window.scrollTo(0, 0)
  }, [])*/
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='transtion'></div>
      <MainContent/>
      <Contact_Us/>
    </div>
  );
}

export default App;
