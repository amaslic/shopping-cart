import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
import IProduct from 'resources/interface/product';
import { IState } from 'resources/interface/state';
import { pluck } from 'rxjs/operators';
import { addToCart } from './actions';

@autoinject()

@connectTo<IState>({
	selector: {
		products: (store) => store.state.pipe(pluck('products')),
	}
})

export class Welcome {
	
	public added: boolean = false;
	public alertMsg: string = '';

	public query: string = '';

	public allProducts: Object = [];
	public products: any = [];

	constructor(private store: Store<IState>) {
		this.store.registerAction('AddToCart', addToCart);
	}


	addToCart = (product: IProduct) => {

		this.added = true;
		this.store.dispatch(addToCart, product);
		this.alertMsg = `${product.name} successfully added to cart.`;

		let timeout = setInterval( () => {this.added = false; clearInterval(timeout); }, 1000);

	}

	productsChanged(newState: IState, oldState: IState) {
		this.allProducts = newState;
		this.products = newState;
	}
	
	filterProducts = () => {
		
		const reg = new RegExp(this.query.split('').join('.*'), 'i');
		this.allProducts = this.products.filter((item: IProduct) => {
			if (item.name.match(reg)) {
			return item;
			}
		});
		
	}


}
