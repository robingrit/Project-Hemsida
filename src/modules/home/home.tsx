import { useState, useEffect } from 'react';
import './home.scss';

// Images
 
import hons from './resources/Hons1_web.jpg';
import fish from './resources/Fisk1_web.jpg';
import vege from './resources/Gronsaker1_web.jpg';
import hons2 from './resources/Honsbild.jpg';
import balj from './resources/Baljvaxter.jpg';
import aldre from './resources/matforaldre.jpg';

const imageList = [hons,fish,vege,hons2,balj,aldre];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Preload images
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
        setIsFading(false);
      }, 1000); // Match the timeout duration with the CSS transition duration
    }, 5000); // Total time for each image (transition + display time)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="home_wrapper">
      <div className={`slideshow ${isFading ? 'fade' : ''}`}>
        {imageList.map((imgSrc, index) => (
          <img
          key={index}
          className={`slide ${currentIndex === index ? 'active' : ''} ${isFading ? 'parallax' : ''}`}
          src={imgSrc}
          alt={`Slide ${index}`}
        />
        
          /* <img
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
            src={imgSrc}
            alt={`Slide ${index}`}
          /> */
        ))}
      </div>
    </div>
  );
}

export default Home;
