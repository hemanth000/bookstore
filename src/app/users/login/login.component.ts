import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteruserService } from 'src/app/registeruser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  })

  constructor(private rs:RegisteruserService,private route:Router) { }

  validateuser(){
    console.log(this.loginForm.value);
    this.rs.loginuser(this.loginForm.value).subscribe((data)=>{
      console.log(data)
       localStorage.setItem('token',data.token)
       localStorage.setItem('id',data.userp._id)
       this.route.navigate([''])
    })
    
  }

  
    
    


  ngOnInit(): void {

  }

}
