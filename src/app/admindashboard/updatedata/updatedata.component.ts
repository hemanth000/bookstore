import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { books } from 'src/app/book';
import { BookdetailService } from 'src/app/bookdetail.service';
import { UpdateproductService } from 'src/app/updateproduct.service';

@Component({
  selector: 'app-updatedata',
  templateUrl: './updatedata.component.html',
  styleUrls: ['./updatedata.component.css']
})
export class UpdatedataComponent implements OnInit {

  title=""
  bookdetail:books[]=[]
  book:any

  constructor(private bs:BookdetailService,private us:UpdateproductService) { }

  updateProductForm=new FormGroup({

    _id:new FormControl(''),
     title:new FormControl(''),
     isbn:new FormControl(''),
     pageCount:new FormControl(''),
     publishedDate:new FormControl(''),
     thumbnailurl:new FormControl(''),
     shortDescription:new FormControl(''),
     longDescription:new FormControl(''),
     status:new FormControl(''),
     authors:new FormControl(''),
     categories:new FormControl(''),
     price:new FormControl(''),
     currency:new FormControl(''),
     discount:new FormControl(''),
     discountunit:new FormControl('percent'),

  })
  showdata(){
    this.bs.getbookdetail(this.title).subscribe((data)=>{
      this.bookdetail=data;
      console.log(this.bookdetail)
      this.book=this.bookdetail[0]
      this.fillform()
    })
    
    
  }

  fillform(){
    this.updateProductForm.patchValue({

      _id:this.book._id,
       title:this.book.title,
       isbn:this.book.isbn,
       pageCount:this.book.pageCount,
       publishedDate:this.book.publishedDate,
       thumbnailurl:this.book.thumbnailUrl,
       shortDescription:this.book.shortDescription,
       longDescription:this.book.longDescription,
       status:this.book.status,
       authors:this.book.authors[0],
       categories:this.book.categories[0],
       price:this.book.price,
       currency:this.book.currency,
       discount:this.book.discount
  
      })
  }

  updatedata(){

    console.log(this.updateProductForm.value)
     this.us.updatebok(this.updateProductForm.value).subscribe((data)=>{
       console.log(data);
     })
  }

  ngOnInit(): void {
  }

}
