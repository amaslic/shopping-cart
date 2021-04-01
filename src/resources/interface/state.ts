import IProduct from "./product";

export interface IState {
	products: IProduct[],
	cart: {
		products: IProduct[]
	}
}