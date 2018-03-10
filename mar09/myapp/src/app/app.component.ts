import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- Feb 17, 2017 -->
    {{ mydate | date }}<br>

    <!-- February 17, 2017 -->
    <p>{{ mydate | date: 'yMMMMd' }}<br>

        <!-- Feb 17, 2017 -->
    <p>{{ mydate | date: 'mediumDate' }}<br>

        <!-- Friday, February 17, 2017 -->
    <p>{{ mydate | date: 'fullDate' }}<br>

        <!-- 6:00 PM -->
    <p>{{ mydate | date: 'shortTime' }}<br>

        <!-- FRIDAY, FEBRUARY 17, 2017 -->
    <p>{{ mydate | date:'fullDate' | uppercase}}</p>

    <!-- February 17, 2017 6:00PM -->
    <p>{{ mydate | date:'MMMM d, y h:mma' }}</p>
    {{price | currency:'USD':true}}
    `
})
export class AppComponent {
    // Months start counting at 0.
    mydate = new Date(2017, 1, 17, 18, 0, 30); // October 23, 1940
    price: number = 23.23333;
    constructor() {

    }

}