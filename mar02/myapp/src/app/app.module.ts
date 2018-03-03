import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//this is our root component
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
    //this import option loads up out Angular
    // dependencies into an array
    // all dependencies can be found under directory node_modules/@angular
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//this points to root component
})
export class AppModule { }
