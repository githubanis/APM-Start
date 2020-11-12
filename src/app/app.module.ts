import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from "./shared/star.component";
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
