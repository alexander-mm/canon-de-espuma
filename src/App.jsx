import { useState } from 'react';
import Popup from './components/PopUp';
import styles from "./style"
import Navbar from "./components/01-Navbar/Navbar"
import Main from "./components/02-MainScreen/Main"
import About from "./components/03-AboutUs/About"
import Gallery from "./components/04-Gallery/Gallery";
import Contact from "./components/05-Contact/Contact";
import Footer from './components/06-Footer/Footer';

function App() {

  const [showPopup, setShowPopup] = useState(true);
  const [contactLinksOption, setContactLinksOption] = useState(1);

  const handleImageClick = (imageNumber) => {
    setShowPopup(false);
    setContactLinksOption(imageNumber);
  };

  return (

    <div className="bg-custom-gradient-two w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-custom-gradient-two`}>
        <Main />
        <div id="nosotros" className="bg-transparent py-9"></div>
      </div>

      <div className="bg-custom-gradient-two">
        <About />
        <div id="galeria" className="bg-transparent py-8"></div>
      </div>


      <div className="bg-custom-gradient-two">
        <Gallery />
        <div id="contacto" className="bg-transparent py-9"></div>
      </div>

      <div className="bg-custom-gradient-two">
        {showPopup && <Popup onImageClick={handleImageClick} />}
        <Contact contactLinksOption={contactLinksOption} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
export default App