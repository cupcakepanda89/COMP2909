import { Component, OnInit, Input } from '@angular/core';
import {AppComponent, FoodItem} from "../app.component";

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input()
  foods: FoodItem[];
  constructor() { }

  ngOnInit() {
  }

}
