import { removeFromCart } from 'actions';
import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
import { IState } from 'resources/interface/state';
import { pluck } from 'rxjs/operators';

@autoinject()

@connectTo<IState>({
    selector: {
      cart: (store) => store.state.pipe(pluck('cart')),
    }
})

export class Cart {


	constructor(private store: Store<IState>) {
		this.store.registerAction('RemoveFromCart', removeFromCart);
	}

	removeFromCart (product){
		this.store.dispatch(removeFromCart, product);
	}
	 

}
