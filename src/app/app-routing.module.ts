import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content/content.component';
import { NewreleasesComponent } from './newreleases/newreleases.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
   {path:'',component:ContentComponent},
  {path:"productdetails/:title",component:ProductdetailsComponent},
  {path:"categories/:name",component:CategoriesComponent},
  {path:"newreleases",component:NewreleasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
