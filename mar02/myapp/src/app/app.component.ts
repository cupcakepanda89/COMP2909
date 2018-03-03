import { Component } from '@angular/core';

/**
 * Component architecture pairs up a view and a class which contains logic and data to support the view
 * selector is an html tag
 */

/**
 * Component has two things.
 * 1. Component decorator which informs app how to process file.
 * 2. Class which defines data structures and logic
 */

//1. Component decorator which informs app how to process file.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//2. Class which defines data structures and logic
export class AppComponent {
  //Here is some data
  title = 'app'; // variable or property or model
  lastName = 'Truong';
  firstName = 'Katelyn';
    /**
     * models - store data
     */

  // Here is some logic
  myfunction() {
    alert("hi");
  }
}
