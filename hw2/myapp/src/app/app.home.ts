import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import {FoodItem} from "./app.component";
@Component({
  template: `This is home page.<br>
    Product ID: {{id}}<br>
    Product Name: {{name}}<br>
    Manufacturer: {{mfg}}<br>
    Quantity: {{pkg}}<br>
    Pack Size: {{qty}}<br>
  `
})
export class HomeComponent {
  id: number;
  name: string;
  mfg: string;
  pkg: string;
  qty: number;
  // The constructor sets up the class.
  constructor(private route: ActivatedRoute) {
  }

  // ngOnInit() gets called after the class is set up.
  // At this point, the class is able to handle the parameters passed to it.
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      let name = params['name'];
      let mfg = params['mfg'];
      let pkg = params['pkg'];
      let qty = params['qty'];
      this.id = id;
      this.name = name;
      this.mfg = mfg;
      this.pkg = pkg;
      this.qty = qty;
    });
  }

}
/*myFoodItems: FoodItem[];
FOODITEMS: FoodItem[] = [
  { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
  { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
  { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
  { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
];*/
