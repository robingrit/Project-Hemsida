import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the pathname changes
  }, [pathname]);

  return null; // This component doesn't render anything visible
};

export default ScrollToTop;
