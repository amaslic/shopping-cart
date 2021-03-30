import {bindable} from 'aurelia-framework';

export class Product {
  @bindable product;

  valueChanged(newValue, oldValue) {
    //
  }
}
