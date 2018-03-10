import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewDirective }  from './newDirective';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, NewDirective ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }