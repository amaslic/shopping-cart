import { productService } from "services/product";
import { autoinject } from 'aurelia-dependency-injection';
import IProduct from "resources/interface/product";


@autoinject()
export class ProductDetails {

	public products: any;
	public product: IProduct;
	public prodId: number;

	constructor(private service: productService){

	}
	
	activate(params: any){
		this.prodId = params.id;
		this.product = this.service.getProductById(params.id);

	}

}