import { Component } from '@angular/core';
import { MyDataService } from './myDataService';

@Component({
    selector: 'app-root', //reference the tag that pull the content
    template: `<h1>Hello world!  {{title}}</h1>
    <p>{{myName}}</p>
    <second-directive [firstName]="author"></second-directive>
    <!--if I want to pass a string [firstName] = "author" like Some String.
    // I have to use single quotation within double quotation
    // [firstName]=" 'some string' " -->
    <ul><li *ngFor="let name of names">{{name}}</li></ul>`,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService]

})
export class AppComponent {
    public title = 'This is Angular!';
    public author = 'Fred';
    names: Array<any>;
    myName: string;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.myName = myDataService.getMyName();

    }
}