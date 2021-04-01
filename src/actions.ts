import IProduct from "resources/interface/product";
import { IState } from "resources/interface/state";

let newState: IState;

export const addToCart = (state: IState, product: IProduct) => {
	newState = Object.assign({}, state);

	product.qty--;
	newState.cart.products = [...newState.cart.products, product];

	return newState;
}

export const removeFromCart = (state: IState, product: IProduct) => {
	newState = Object.assign({}, state);

	product.qty++;
	newState.cart.products.splice(newState.cart.products.indexOf(product), 1);

	return newState;
}

export const checkout = (state: IState) => {
	newState = Object.assign({}, state);
	newState.cart.products = [];

	return newState;
}

export const loadProducts = (state: IState, products: IProduct[]) => {
	newState = Object.assign([], state);

	newState.products = products;

	return newState;
}
