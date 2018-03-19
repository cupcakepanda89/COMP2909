import { Component } from '@angular/core';
import {MyDataService} from "./myDataService";
import {TemperatureService} from "./dataService2";
@Component({
    selector: 'app-root',
    template:
            `<h1>This is the header</h1>
    <ul><li *ngFor="let name of names">{{name}}</li></ul>
    <p>6 degree in Celsius is equal to {{result}} in Fahrenheit</p>
    <second-directive></second-directive>
    <nav>
        <a routerLink="/page-a" routerLinkActive="active">page A</a> |
       <!-- <a routerLink="/page-b" routerLinkActive="active">page B</a> -->
        <a routerLink="/page-b/5/bob" routerLinkActive="active">B</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>
    <footer><h3>This is my footer.</h3></footer>`,
    providers: [MyDataService,TemperatureService]

})
export class AppComponent {
    public title = 'This is Angular!';
    names: Array<any>;
    cel: Array<any>;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService,
                temperatureService: TemperatureService ) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.result = temperatureService.getFeh();

    }

}