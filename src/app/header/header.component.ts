import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value:any
  html:any
  constructor(private route:Router) { }

  callkeyup(){
    this.getdata()
  }
  async getdata(){
    console.log(this.value);
    const res=await fetch("http://localhost:3000/books");
    const books=await res.json();
    console.log(books);
    let result=books.filter((book: { title: string; authors: any[]; })=>{
      const regex=new RegExp(`^${this.value}`,'gi');
      return  book.title.match(regex) || book.authors.find(auth=>auth.match(regex));
  })
  console.log(result)
  if(this.value.length==0){
      result=[];
  }
  this.listofbooks(result)
  }

  listofbooks(output:any){
    const list= output.map((book: { title: any; })=>
      `<div style="color:red">${book.title}</div>`
   ).join('')
   console.log(list); 
   this.html=list;
       
  }

  navigateto(){
       this.route.navigate([`productdetails/${this.value}`])
       
       
  }
  navigatecategories(name:any){
    this.route.navigate(['/categories',name])
  }
  
  ngOnInit(): void {
    
  }
 
     
  


}


