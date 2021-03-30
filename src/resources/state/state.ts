import { IState } from "resources/interface/state";

export const initialState : IState = {
	products: [
		{
			id: 0,
			price: 50,
			name: "Product 1",
			img_url: null,
			qty: 5
		},
		{
			id: 1,
			price: 10,
			name: "Product 2",
			img_url: null,
			qty: 1
		},
		{
			id: 2,
			price: 1000,
			name: "Product 3",
			img_url: null,
			qty: 4
		},
		{
			id: 3,
			price: 65,
			name: "Product 4",
			img_url: null,
			qty: 5
		}
	],
	cart: {
		products: []
	},
	user: {
		name: '',
		email: ''
	}
};
  

  