import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewDirective }  from './newDirective';
import { ThirdDirective } from './newDirective2';
import { FahrenheitPipe } from './app.fahrenheitPipe';
import { AppComponent }  from './app.component';
import { PageDefault }    from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing }        from './app.routing';


@NgModule({
    imports:      [ BrowserModule, FormsModule, routing ],
    declarations: [ AppComponent, NewDirective, ThirdDirective,FahrenheitPipe,
        PageDefault,
        PageAComponent, PageBComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }