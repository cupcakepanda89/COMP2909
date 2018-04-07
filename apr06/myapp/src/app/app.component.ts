import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:   
      `<h1>This is the header</h1>
    <nav>
    <a routerLink="/page-a" routerLinkActive="active">A</a> |
    <a routerLink="/page-b" routerLinkActive="active">B</a> | 
    <!-- Link to ColorsModule area -->
    <a routerLink="/colors" routerLinkActive="active">Colors</a> 
 
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>
    <hr>
    <h2>
    Welcome to {{exercise2}}!
    </h2>
    <input type="submit" value="my button" (mouseenter)="myMouseEnter()">
    <input type='text' (keydown)="myKeyDown($event)">
    <hr>
    <h2>
    Welcome to {{exercise3}}!
    </h2>
    <input type='text' (focus)="myFocusEvent('gainedFocus')" (blur)="myFocusEvent('lostFocus')">
    <hr>   
    <h2>
    Welcome to {{exercise4}}!
    </h2>
    Cut from here:
    <input [(ngModel)]="myContent" type='text' (cut)="cutEvent(myContent)"><br />
    Paste in here:
    <input type='text' [(ngModel)]="myPastedContent" (paste)="pasteContent(myPastedContent)">
    <hr>
    <h2>
      Welcome to {{exercise5}}!
      </h2>
    <p [myHighlight]>Highlight me!</p>
    <p [myHighlight]="'violet'">
        Highlight me too!
    </p>

      `

})
export class AppComponent { 
  exercise2 = 'Key Down and Key Up';
  myMouseEnter() {
    console.log("Mouse entered!")
  }
  myKeyDown(event) {  
    console.log(event)
    console.log(event.key)
  }

  exercise3 = 'Focus and Blur';
  myFocusEvent(description) {  
    console.log(description)
  }

  exercise4 = 'Copy/Cut and Paste';
  cutContent = '';

  cutEvent(content) {  
    this.cutContent = content;
    console.log(content)
  }
  pasteContent() {
    console.log(this.cutContent);
    this.cutContent = '';
  }

  exercise5 = 'Attribute Directives Highlight';
}
