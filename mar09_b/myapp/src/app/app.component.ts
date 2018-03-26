import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `Phone Number: {{phone | phonePipe }} <br>
            <input [(ngModel)]= "phone">`,

})
export class AppComponent {
  title = 'app works!';

  phone: number;
    constructor() {
        this.phone = 6042345678;
    }


}
