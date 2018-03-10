import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewDirective }  from './newDirective';
import { NewDirective2 } from './newDirective2';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, NewDirective, NewDirective2 ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }