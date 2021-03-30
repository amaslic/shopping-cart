import { removeFromCart } from 'actions';
import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
import IProduct from 'resources/interface/product';
import { IState } from 'resources/interface/state';
import { pluck } from 'rxjs/operators';

@autoinject()

@connectTo<IState>({
	selector: {
		cart: (store) => store.state.pipe(pluck('cart')),
	}
})

export class Cart {
	public userProducts: IProduct[] = [];
	public total: number = 0;
	public items: any = [];

	constructor(private store: Store<IState>) {
		this.store.registerAction('RemoveFromCart', removeFromCart);
	}

	removeFromCart (product){
		this.store.dispatch(removeFromCart, product);
	}

	cartChanged(newState: IState, oldState: IState) {
		this.userProducts = newState.products;
		if(this.userProducts.length > 0){
			this.calculateTotal(this.userProducts);
		}
	}

	calculateTotal = (products) => {
		this.total = 0;
		products.map( val => {
			this.total += val.price;
		})
	}
	 
}
