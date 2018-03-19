import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
            `<h1>This is the header</h1>
    <second-directive></second-directive>
    <nav>
        <a routerLink="/page-a" routerLinkActive="active">page A</a> |
       <!-- <a routerLink="/page-b" routerLinkActive="active">page B</a> -->
        <a routerLink="/page-b/5/bob" routerLinkActive="active">B</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>
    <footer><h3>This is my footer.</h3></footer>`
})
export class AppComponent { }