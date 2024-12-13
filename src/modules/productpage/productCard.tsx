import React, { useEffect, useState } from 'react';
import { Product } from './types';

// Import SVGs as image sources
import FishIcon from './icons/fish.svg';
import WheatIcon from './icons/wheat.svg';
import EggIcon from './icons/egg.svg';
import VeganIcon from './icons/vegan.svg';
import './productsPage.scss';

const iconMap: { [key: string]: string } = {
  'fish.svg': FishIcon,
  'wheat.svg': WheatIcon,
  'egg.svg': EggIcon,
  'vegan.svg': VeganIcon,
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const loadedIcons = product.icons.map((icon) => iconMap[icon]);
    setIcons(loadedIcons);
  }, [product.icons]);

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      
      {/* Render icons only if they exist */}
      {icons.length > 0 && (
        <div className="product-icons">
          {icons.map((iconSrc, index) => (
            <span key={index}>
              {iconSrc && (
                <img 
                  src={iconSrc} 
                  alt={product.icons[index]} 
                  className="product-icon" 
                  style={{ 
                    filter: 'invert(82%) sepia(31%) saturate(4715%) hue-rotate(0deg)' // Example color filter, adjust as necessary
                  }} 
                />
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

