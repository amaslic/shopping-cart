import {bindable} from 'aurelia-framework';

export class CartInfo {
	@bindable products: number;
	@bindable  total: number;

}
