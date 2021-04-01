import {bindable} from 'aurelia-framework';

export class Alert {
	@bindable msg: string;
	@bindable show: boolean;

}
