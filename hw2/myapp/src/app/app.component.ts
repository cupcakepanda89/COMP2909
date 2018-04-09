import { Component } from '@angular/core';

export class FoodItem {
  id: number;
  name: string;
  mfg: string;
  pkg: string;
  qty:number;
}

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
             <h2>Homework#2</h2>
  <nav>
  <a routerLink="/home" routerLinkActive="active">Home</a> |
  <a routerLink="/about" routerLinkActive="active">About</a>
  </nav>
  <!-- Where router should display a -->
  <router-outlet></router-outlet>\`
<br>This other content was set in page-aln: {{myItem}}
<ul>
  <li *ngFor="let food of myFoodItems" >
    <a routerLink="/home/{{food.id}}" routerLinkActive="active">{{food.id}}</a>{{food.name}}</li>
</ul>
{{FOODITEMS[0].name}}
<br>This other content was set in page-aln: {{myItem}}
`
})
export class AppComponent {
  title = 'app works!';
  myFoodItems: FoodItem[];
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

    this.myFoodItems = JSON.parse(sessionStorage.getItem("food"));

    console.log(this.FOODITEMS[0].name);
  }
}
