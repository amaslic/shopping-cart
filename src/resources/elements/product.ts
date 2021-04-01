import {bindable} from 'aurelia-framework';
import IProduct from 'resources/interface/product';

export class Product {
	@bindable product: IProduct[];
	@bindable cart: boolean;

}
