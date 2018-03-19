import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GastosModule } from './gastos/gastos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GastosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
