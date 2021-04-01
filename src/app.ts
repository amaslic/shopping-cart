import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';
import { productService } from 'services/product';
import { connectTo, Store } from 'aurelia-store';
import { IState } from 'resources/interface/state';
import { pluck } from 'rxjs/operators';
import { loadProducts } from 'actions';

@connectTo<IState>({
	selector: {
		products: (store) => store.state.pipe(pluck('products')),
	}
})

@autoinject()
export class App {
		public router: Router;
	public products: Object = [];

	constructor(private service: productService, private store: Store<IState>){

		this.store.registerAction('LoadProducts', loadProducts);

	}

	activate() {
		this.fetchData();
	}  

	fetchData = () => {
		this.products =  this.service.getProducts();
		this.store.dispatch(loadProducts, this.products);
	}


	public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
		config.title = '';
		config.map([
			{
			route: ['', '*', 'welcome'],
			name: 'welcome',
			moduleId: PLATFORM.moduleName('./welcome'),
			nav: true,
			title: 'Home'
			},
			{
			route: ['cart'],
			name: 'cart',
			moduleId: PLATFORM.moduleName('./components/cart'),
			nav: true,
			title: 'Cart'
			},
			{
			route: ['product/:id'],
			name: 'product',
			moduleId: PLATFORM.moduleName('./components/product-details'),
			nav: false,
			title: 'Product'
			}
		]);
	
		this.router = router;
		}

}
