// productsValue.d.ts

/* declare module './productsValue.js' {
    export interface Product {
      id: number;
      name: string;
      price: number;
      description: string;
      imageUrl: string;
    }
  
    const products: Product[];
    export default products;
  } */
 // productsValue.d.ts

import { Product } from './types';

declare module './productsValue.js' {
  const products: Product[];
  export default products;
}