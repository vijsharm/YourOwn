import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { AppComponent }  from './app.component';
const window: any = {};
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
