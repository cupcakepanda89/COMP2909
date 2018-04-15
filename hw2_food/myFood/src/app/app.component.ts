import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FOODS } from './food-list';
export class FoodItem {
  id: number;
  name: string;
  mfg: string;
  pkg: string;
  qty:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Food List';
  foods: FoodItem[];
  FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
  ];
  constructor() {
    // Create
    if(sessionStorage.getItem("food") == null) {
      sessionStorage.setItem("food", JSON.stringify(this.FOODITEMS));
    }

    this.foods = JSON.parse(sessionStorage.getItem("food"));

    console.log(this.FOODITEMS[0].name);
  }


  ngOnInit() {
  }
  selectedFood: FoodItem;
  onSelect(food: FoodItem){
    this.selectedFood = food;
  }
  today = Date.now();

}
