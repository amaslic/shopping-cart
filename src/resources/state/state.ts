import { IState } from "resources/interface/state";

export const initialState : IState = {
	products: [
		{
			id: 0,
			price: 150,
			name: "Nike Air Zoom SuperRep 2",
			img_url: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/30e468c1-ebc8-4978-86c1-160a37fc36ff/air-zoom-superrep-2-hiit-class-shoe-9ZdSxW.jpg",
			qty: 5
		},
		{
			id: 1,
			price: 110,
			name: "Nike Air VaporMax Evo",
			img_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ada3991c-f4f0-457f-914c-ce6b24a94f7d/air-vapormax-evo-shoe-mc10HF.png",
			qty: 1
		},
		{
			id: 2,
			price: 230,
			name: "Nike Fly.By Mid",
			img_url: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9094123f-f624-4f32-9df8-9093bcc4c0ee/flyby-mid-basketball-shoe-Q2Gp58.png",
			qty: 4
		},
		{
			id: 3,
			price: 65,
			name: "Nike Air Max Pre-Day",
			img_url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18a5494e-0f14-422c-9fce-4b469db7c936/air-max-pre-day-shoes-hlv9tD.png",
			qty: 5
		}
	],
	cart: {
		products: []
	},
	user: {
		name: '',
		address: ''
	}
};
  

  