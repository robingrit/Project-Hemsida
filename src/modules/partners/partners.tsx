import { useRef } from "react";
import { useScrollAnimation } from "./useScrollAnimation";  // Import the hook
import "./partners.scss";

const logoEgg = new URL("../../assets/egg-logo.png", import.meta.url);

const logo = new URL("../../assets/partners/testlogo-trans.png", import.meta.url);

function Partners() {
  // Reference to the scroll container
  const scrollRef = useRef<HTMLDivElement | null>(null);

 
  // Use the custom hook for scroll animation
  useScrollAnimation(scrollRef, 1);
  return (
    <>
      <div className="partners_wrapper">
        <div className="partners_flexbox">
          <div id="partners_text">
            <h1>Partners</h1>
          </div>
        </div>
        <div className="scroll-container" ref={scrollRef}>
          <img src={logo.toString()} alt="Partner Logo" />
          <img src={logoEgg.toString()} alt="Partner Logo" />
          <img src={logo.toString()} alt="Partner Logo" />
          <img src={logoEgg.toString()} alt="Partner Logo" />
          <img src={logo.toString()} alt="Partner Logo" />
          <img src={logoEgg.toString()} alt="Partner Logo" />
          <img src={logo.toString()} alt="Partner Logo" />
          <img src={logoEgg.toString()} alt="Partner Logo" />
        </div>
      </div>
    </>
  );
}

export default Partners;
