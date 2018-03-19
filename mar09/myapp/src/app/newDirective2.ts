import {Component, Input} from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'third-directive',
    template: `<h3>Hello from third directive! {{name}}</h3>`,
})
export class ThirdDirective {
    @Input()
    name: string;
}