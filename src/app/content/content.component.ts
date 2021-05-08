import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { AddproductstocartService } from '../addproductstocart.service';
import { books } from '../book';
import { CategoriesbooksService } from '../categoriesbooks.service';
import { NewreleasesService } from '../newreleases.service';
import { RegisteruserService } from '../registeruser.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  faShoppingCart=faShoppingCart
  newreleases:books[]=[]
  pbooks:books[]=[]
  dsbooks:books[]=[]
  loggeduser:any

  constructor(private ns:NewreleasesService,private cs:CategoriesbooksService,private ap:AddproductstocartService,private routes:Router,public rs:RegisteruserService) { }

  gotocart(book:any){
    console.log(book)
    let cart={
      uid:this.loggeduser,
      pid:book._id,
      title:book.title,
      price:book.price,
      qty:1,
      discountbook:book.discount,
    }

   this.ap.addproducts(cart).subscribe((data)=>{
     console.log(data);
     
   })
    this.routes.navigate(['/addtocart'])
  }

  ngOnInit(){
    this.ns.getnewbooks().subscribe((data)=>{
       data.splice(3,6);
       console.log(data);
       this.newreleases=data;
    })

    this.cs.getbooksbycategories("Programming").subscribe((data)=>{

      data.splice(3,(data.length)-4)
      this.pbooks=data;

    })

    this.cs.getbooksbycategories("Data Science").subscribe((data)=>{
      data.splice(3,(data.length)-4)
      this.dsbooks=data;
    })

    this.loggeduser=this.rs.getuserid()
    
  }

}
