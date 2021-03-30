import {PLATFORM} from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import { autoinject } from 'aurelia-dependency-injection';

@autoinject()
export class App {
  	public router: Router;

	public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
		config.title = 'Aurelia';
		config.map([
		  {
			route: ['', 'welcome'],
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
		  }
		]);
	
		this.router = router;
	  }

}
