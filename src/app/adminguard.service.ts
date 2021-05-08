import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegisteruserService } from './registeruser.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {

  constructor(private rs:RegisteruserService,private route:Router) { }

  canActivate():boolean{
   
     if(this.rs.isadminlogged()){
       return true
     }
     else{
       this.route.navigate(['/'])
       return false
     }


  }

}
