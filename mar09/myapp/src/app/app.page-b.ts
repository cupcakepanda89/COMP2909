import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    template: ` <p>This is page B.</p>       
    ID: {{id}}<br/>
    Name: {{firstName}}<br>
    
    -------<br>
    This is page b. {{retrievedFromStorage}}
    <input type="input"  (ngModelChange)="mychange($event)" [ngModel]="mymodel">

    `
})
export class PageBComponent {
    id: number;
    firstName: string;

    // The constructor sets up the class.
    constructor(private route: ActivatedRoute) {
    }

    // ngOnInit() gets called after the class is set up.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID = params['id'];
            let localName = params['firstname'];
            this.id = localID;
            this.firstName = localName;
        });
    }
    mychange(val:string) {
        sessionStorage.setItem("autosave", val);
        console.log(val); // updated value
    }

}