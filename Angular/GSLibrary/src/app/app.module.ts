import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from './gs-lib/carousel/carousel.module'
import { ProductGridModule } from './gs-lib/product-grid/product-grid.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ProductGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
