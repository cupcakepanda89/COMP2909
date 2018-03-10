import { Component } from '@angular/core';

@Component({
    selector: 'app-root', //reference the tag that pull the content
    template: `<h1>Hello world!  {{title}}</h1>
    <second-directive></second-directive>`,
})
export class AppComponent {
    public title = 'This is Angular!';
}