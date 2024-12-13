import "./about.scss";
import OmOss from "./resources/OmOss.jpg";
function About() {
  return (
    <>
      <div className="about_wrapper">
        <div id="about_text">
          <div id="about_left">
            <h1>Lär Känna Oss</h1>
            <h2>Visionen - Cirkulär hållbar mat</h2>
            <p>
              En God Granne arbetar för att föra samman lokalt producerade produkter med konsumenter, med fokus på miljö, kvalitet och människorna bakom. Tillsammans med våra partners förenklar vi samarbetet mellan producenter och konsumenter, vilket skapar en bättre matupplevelse inom skolor och äldrevård.
            </p>
          </div>

          <div id="about_right">
            <img id="img_group" src={OmOss} alt="Group" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;