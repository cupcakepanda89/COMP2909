import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PageDefault }    from './app.pagedefault';
import { PageAComponent } from './app.page-a';
import { PageBComponent } from './app.page-b';
import { routing }        from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,  PageDefault, 
    PageAComponent, PageBComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

