import { Component, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Component({
    selector: 'child-component',
    template:   
      `<div id='test'(mouseenter)="colorMe()" (mouseleave)="unColor()">
      hello there! highlight me.
      </div>
      `

})
export class ChildComponent { 
 
    colorMe() {
        document.getElementById("test").style.backgroundColor='yellow';
      }
      unColor() {
        document.getElementById("test").style.backgroundColor='none';
      }
}
