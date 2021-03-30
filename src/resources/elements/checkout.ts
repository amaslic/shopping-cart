import {bindable} from 'aurelia-framework';
import { autoinject } from 'aurelia-dependency-injection';
import { connectTo, Store } from 'aurelia-store';
import { IState } from 'resources/interface/state';
import { pluck } from 'rxjs/operators';
import { checkout } from '../../actions';

@autoinject()

@connectTo<IState>({
	selector: {
		cart: (store) => store.state.pipe(pluck('cart')),
	}
})

export class Checkout {
  @bindable value;

  public name: string = '';
  public address: string = '';

  valueChanged(newValue, oldValue) {
    //
  }

  
	constructor(private store: Store<IState>) {
		this.store.registerAction('Checkout', checkout);
	}

  checkout = () => {
	this.store.dispatch(checkout);
  }


}
