import './products.scss'; 
import { Link } from 'react-router-dom';
import veg from './resources/Veg1_web.jpg';
function Products() {
  return (
    <>
      <div className="products_intro_wrapper">
        <div id="products_intro_content">
          <div id="products_intro_left">
              <img id="products_intro_img" src={veg} alt="pic" />
          </div>
          <div id="products_intro_right">
            <h1>Våra Produkter</h1>
            <h2>God & pålitlig mat av hög kvalitet</h2>
            <p>
              Med vårt breda sortiment av noggrant utvalda produkter kan er verksamhet servera mat som är
              perfekt anpassad till just era unika behov. Våra produkter garanterar inte bara högsta
              kvalitet – de är även tillagade av svenska råvaror med omsorg för både smak och hållbarhet,
              alltid med konsumenten i fokus.
            </p>
            <Link to="/produkter">
            <button id="products_intro_btn">Se Produkter</button>
            </Link> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;