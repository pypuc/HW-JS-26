import { products } from './data.js';
import productTemplate from './templates/product.hbs';

const markup = productTemplate(products);
const root = document.querySelector('body');
root.innerHTML = markup;
