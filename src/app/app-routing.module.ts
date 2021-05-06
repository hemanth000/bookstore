import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddataComponent } from './admindashboard/adddata/adddata.component';
import { AdminComponent } from './admindashboard/admin/admin.component';
import { DeletedataComponent } from './admindashboard/deletedata/deletedata.component';
import { UpdatedataComponent } from './admindashboard/updatedata/updatedata.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AddtocartComponent } from './cart/addtocart/addtocart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content/content.component';
import { NewreleasesComponent } from './newreleases/newreleases.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
   {path:'',component:ContentComponent},
   {path:'register',component:RegisterComponent},
   {path:'login',component:LoginComponent},
  {path:"productdetails/:title",component:ProductdetailsComponent},
  {path:"categories/:name",component:CategoriesComponent},
  {path:"newreleases",component:NewreleasesComponent},
  {path:"admin",component:AdminComponent,canActivate:[AuthGuard],children:[
    {path:'add',component:AdddataComponent},
    {path:'update',component:UpdatedataComponent},
    {path:'delete',component:DeletedataComponent}
  ]},
  {path:'addtocart',component:AddtocartComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
