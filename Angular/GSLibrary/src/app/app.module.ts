import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from './gs-lib/carousel/carousel.module'
import { ProductGridModule } from './gs-lib/product-grid/product-grid.module'
import { ModalModule } from './gs-lib/modal/modal.module'
import { SelectModule } from './gs-lib/select/select.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ProductGridModule,
    ModalModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
