import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from "./shared/star.component";
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailGuard } from "./products/product-detail.guard";
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
