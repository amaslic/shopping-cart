import IProduct from "./product";
import { IUser } from "./user";

export interface IState {
	products: IProduct[],
	cart: {
		products: IProduct[]
	},
	user: IUser 
}