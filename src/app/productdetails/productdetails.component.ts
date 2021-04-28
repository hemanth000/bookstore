import { Component, OnInit } from '@angular/core';
import { books } from '../book';
import { BookdetailService } from '../bookdetail.service';
import { NewreleasesService } from '../newreleases.service';
import { ActivatedRoute, ParamMap} from '@angular/router'
import { review } from '../userreview';
import { PostreviewsService } from '../postreviews.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  formvisible=false
  name="hemanth";
  title: any
  oldprice:any
  discount:any
  newprice:any
  newreleases:books[]=[]
  bookdetail:books[]=[]
  reviewmodel=new review('hemanth',"unlocking android ",'hello world',0)
  
  // constructor(private ns:NewreleasesService) { }
  // constructor(private ns:NewreleasesService) { }

  // constructor(private ns:NewreleasesService) { }

  // constructor(private ns:NewreleasesService) { }
  constructor(private bs:BookdetailService,private route:ActivatedRoute,private pr:PostreviewsService){
    
  }

  onsubmit(){
    
    this.reviewmodel.title=this.bookdetail[0].title;
    console.log(this.reviewmodel);
    // console.log(this.bookdetail[0].title)
    this.pr.postreview(this.reviewmodel).subscribe((data)=>{
      console.log(data);
    })
  }
  showform(){
    this.formvisible=true
  }

 
        
  
  
  ngOnInit(){
      //  this.ns.getnewbooks().subscribe(data=>this.newreleases=data)
      //  this.title=this.route.snapshot.paramMap.get('title');
        this.route.paramMap.subscribe( (params:ParamMap)=>{
            this.title=params.get('title')
            this.bs.getbookdetail(this.title).subscribe((data)=>
            {
              this.bookdetail=data
              this.oldprice=this.bookdetail[0].price;
              this.discount=this.bookdetail[0].discount
              console.log(this.oldprice,this.discount)
              var discountprice=(this.oldprice*this.discount)/100;
             this.newprice=this.oldprice-discountprice;
              
            })
            
            
        })
      
      

  }


}
