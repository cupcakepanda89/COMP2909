import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
   // styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    firstName = 'Jane';
    lastName = 'Truong';
    message: string;
    getMessage(_city: string) {
        this.message = 'It is always sunny in ' + _city;
    }
}