import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
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

	constructor(private store: Store<IState>) {
		this.store.registerAction('AddToCart', addToCart);
	}

	addToCart = (product) => {

		this.added = true;
		this.store.dispatch(addToCart, product);
		this.alertMsg = `${product.name} successfully added to cart.`;

		let timeout = setInterval( () => {this.added = false; clearInterval(timeout); }, 1000);

	}

}
