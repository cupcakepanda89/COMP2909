import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // 'providers' allows you to create and pass an instance
  // of the class to the constructor header.
  providers: [MyDataService]

})
export class AppComponent {
  title = 'app works!';
  firstnames: Array<any>;
    // Store instance of 'MyDataService' at class level.
    _myDataService: MyDataService;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(mydataDervice: MyDataService) {
        // Set class level reference.
        this._myDataService = mydataDervice;
        // Use service to call getNames() method.
        this.firstnames = this._myDataService.getNames();
    }
    //

  firstName = 'Jane';
  message: string;
  getMessage(_city: string) {
    this.message = 'It is always sunny in ' + _city;
  }
  lastName = 'Howard';
}
