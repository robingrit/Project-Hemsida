import React, { useState, useEffect } from 'react';
import './productsPage.scss';

import products from './productsValue.js';
import ProductCard from './productCard.js';
import Filter from './Filter.js';

// Product Category Images
import fisk_img from './categories/fisk.jpg';
import gronsaker_img from './categories/gronsaker.jpg';
import hons_img from './categories/hons.jpg';
import vego_protein_img from './categories/vegoprotein.jpg';

const Products: React.FC = () => {
  const [animate, setAnimate] = useState(false); // New state for animation trigger

 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(3); // State to control visible products
  
  // Add "All" option and ensure it appears first
  const categories = ['All', ...new Set(products.map(product => product.category).filter(Boolean))];

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category === 'All' ? '' : category); // Reset filter when "All" is selected
    setVisibleProducts(3); // Reset visible products count when a new category is selected
    setAnimate(true); // Trigger the animation
  };

  // Filter products by selected category
  const filteredProducts = products.filter(product =>
    selectedCategory === '' || product.category === selectedCategory
  );

  // Limit the number of displayed products based on visibleProducts
  const visibleFilteredProducts = filteredProducts.slice(0, visibleProducts);

  // Function to handle showing more products
  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3); // Load 3 more products each time
  };
  

  // Reset the animation state after the animation ends
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false); // Reset animation state
      }, 1000); // Match this duration with the animation duration in CSS

      return () => clearTimeout(timer); // Cleanup timer on unmount or when dependencies change
    }
  }, [animate]);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Upptäck Våra Produkter</h1>
          <p>Hitta lokala & hållbara produkter av hög kvalitet</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="products-categories-wrapper">
        <h2>Produktkategorier</h2>
        <div className="products-categories">
          <article id="product-category">
            <h3>Höns</h3>
            <img src={hons_img} alt="höns" />
            <p>Hönskött har blivit återupptäckt! Utöver ägg ger hönsen oss näringsrikt och välsmakande hönskött som kan användas i en mängd olika sammanhang.</p>
            <p>Bättre och mer hållbart än många alternativa proteinkällor på marknaden!</p>
          </article>
          <article id="product-category">
            <h3>Grönsaker</h3>
            <img src={gronsaker_img} alt="vegetariskt" />
            <p>Grönsaker är viktig i våra måltider, där de bidrar inte bara med näring utan även färg och variation. De är flexibla ingredienser som passar i allt från enkla till avancerade rätter.</p>
            <p>Vi prioriterar närodlade och säsongsbetonade grönsaker för att främja både smak och hållbarhet.</p>
          </article>
          <article id="product-category">
            <h3>Vego Protein</h3>
            <img src={vego_protein_img} alt="vego protein" />
            <p>Vegetabiliskt protein erbjuder spännande möjligheter för den som vill upptäcka nya proteinkällor. Dessa alternativ är rika på näring och kan anpassas till många olika kulinariska stilar.</p>
          </article>
          <article id="product-category">
            <h3>Fisk</h3>
            <img src={fisk_img} alt="fisk" />
            <p>Fisk är en viktig del av fullvärdiga och näringsriktiga måltider. Den är prisvärd och samtidigt mycket god och användbar i en lång rad rätter 
              och sammanhang.</p>
            <p>Svensk fiskråvara från cirkulära och hållbara system!</p>
          </article>
        </div>
      </div>

      {/* Products Section */}
      
      <div className="products_wrapper">
        <Filter
          categories={categories}
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory} // Pass the selected category here
        />

        {/* Display "No products found" if the filtered list is empty */}
        {/* {filteredProducts.length === 0 && <p>No products found in this category.</p>} */}

         <div className={`product-list ${animate ? 'visible' : ''}`}>
          {visibleFilteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> 

        {/* Show "Show More" button if there are more products to display */}
         {visibleProducts < filteredProducts.length && (
          <button className="show-more-btn" onClick={showMoreProducts}>
            Visa Mer
          </button>
        )} 
      </div> 
    </div>
  );
};

export default Products;
