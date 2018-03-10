import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
            `<h1>This is the header</h1>
    <nav>
        <a routerLink="/page-a" routerLinkActive="active">page A</a> |
        <a routerLink="/page-b" routerLinkActive="active">page B</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }