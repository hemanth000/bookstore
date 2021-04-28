import { Component, OnInit } from '@angular/core';
import { books } from '../book';
import { BookdetailService } from '../bookdetail.service';

@Component({
  selector: 'app-ratingtest',
  templateUrl: './ratingtest.component.html',
  styleUrls: ['./ratingtest.component.css']
})
export class RatingtestComponent implements OnInit {

  bookdetail:books[]=[]

  ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 3.7
  }

  starPercentageRounded:string=""
   starsTotal = 5;
   rating=0

   getRatings(){
    
      // Get percentage
      const starPercentage = (this.rating/ this.starsTotal) * 100;

      // Round to nearest 10
       this.starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      console.log(this.starPercentageRounded)
   
   }

  constructor(private bs:BookdetailService) { }

  ngOnInit(): void {
        this.bs.getbookdetail("AngularJS in Action").subscribe((data)=>{
          this.bookdetail=data;
          this.rating=this.bookdetail[0].reviews[1].rating
        }
       )
        

  }

}
