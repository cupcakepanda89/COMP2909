import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewDirective }  from './newDirective';
import { ThirdDirective } from './newDirective2';
import { FahrenheitPipe } from './app.fahrenheitPipe';
import { AppComponent }  from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, NewDirective, ThirdDirective,FahrenheitPipe ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }