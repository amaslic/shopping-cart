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
	public name: string = '';

	constructor(private store: Store<IState>) {
		this.store.registerAction('AddToCart', addToCart);
	}

	addToCart = (product) => {

		this.name = product.name;
		this.added = true;
		this.store.dispatch(addToCart, product);

		let timeout = setInterval( () => {this.added = false; clearInterval(timeout); }, 3000);

	}

}
