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

	constructor(private store: Store<IState>) {
		this.store.registerAction('AddToCart', addToCart);
	}

	  addToCart = (product) => {
		this.store.dispatch(addToCart, product);
	  }

}
