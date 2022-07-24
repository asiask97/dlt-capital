import './App.css';
import NavBar from '../NavBar/NavBar.js';
import MainContent from '../MainContent/MainContent';
import Contact_Us from '../Contact_Us/Contact_Us';
import video from '../../media/skyscraper.mp4'


function App() {
  return (
    <div className="App">
        
          <video autoPlay loop muted>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
      <NavBar/>
      <MainContent/>
      <Contact_Us/>
    </div>
  );
}

export default App;
