import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { NewreleasesService } from './newreleases.service';
import { BookdetailService } from './bookdetail.service';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesbooksService } from './categoriesbooks.service';
import { RatingtestComponent } from './ratingtest/ratingtest.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductdetailsComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CategoriesComponent,
    RatingtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewreleasesService,BookdetailService,CategoriesbooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
