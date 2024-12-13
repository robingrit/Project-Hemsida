import "./footer.scss";

// Egg logo
import logoImg from "../../assets/logo-light.png";
import anders from './resources/Anders.jpg';

function Projects() {
  return (
    <>
      <div className="footer_wrapper">
      <div className="footer_inquiry">
          <h2>NYFIKEN?</h2>
          <h3>Kontakta oss gärna så berättar vi mer!</h3>
        </div>
      <div className="footer">
          <div className="people_wrapper">
            
            {/*
            <div className="person_card">
              <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Person 1" />
              <h3>Lisa Svenson</h3> 
              <p>Koordinator</p>
              <p>lisa@engodgranne.com</p>
            </div>
            */}

            <div className="person_card">
              <img src={anders} alt="Person 2" />
              <h3>Anders Lareke</h3>
              <p>VD och Grundare</p>
              <p><a href="mailto:info@engodgranne.com">info@engodgranne.com</a></p>

            </div>
            
            {/*
            <div className="person_card">
              <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Person 3" />
              <h3>Rickard Gustavsson</h3>
              <p>Säljchef</p>
              <p>rickard@engodgranne.com</p>
            </div>
            */}

          </div>
        </div>
        <img id="footer_logo" src={logoImg} alt="Logo" />
        <div id="footer_content">
          <div id="footer_socials">
            <a href="https://www.facebook.com/engodgrannenaradig" target="_blank" rel="noopener noreferrer">
               {/* Facebook SVG */}
               <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="social_icon"
                aria-label="Facebook"
              >
                 <path
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/anders-lareke-2503482/" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="social_icon"
                aria-label="LinkedIn"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
          </div>
        </div>
        

        <p id="footer_line">© En God Granne AB 2024</p>
      </div>
    </>
  );
}

export default Projects;
