import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//this is our root component
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//this points to root component
})
export class AppModule { }
