
import {autoinject} from 'aurelia-framework';
import products from './products';

@autoinject
export class productService {

	constructor() {}

		getProducts() {
			return products;
		}

		getProductById(id) {

			const product =  products.filter( (product) => {
				return product.id === parseInt(id);
			});

			return product[0];
		}

}
