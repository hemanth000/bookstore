const express = require('express');
const mongoose = require('mongoose');
var mongo = require('mongodb');
var cors = require('cors')
const app = express();

const book=require('./models/book')

console.log("todo require",book);

mongoose.connect('mongodb://localhost:27017/bookstore', {useNewUrlParser: true},{ useFindAndModify: false })



app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


//finding all the books

app.get('/books',(req,res)=>{

    book.find({}).exec((err,books) =>{
    if (err) return handleError(err);
       res.json(books);
  })
 
})

// finding books by title

app.get('/books/:title',async (req,res)=>{

  var value=req.params.title;
   book.find({title:{$regex:value,$options:'$i'}}).exec((err,booksbytitle) =>{
    if (err) return handleError(err);
       res.json(booksbytitle);
  })
 
})

//finding categories by name

app.get('/categories/:name', (req,res)=>{
  let r=req.params.name;
     book.find({categories:r}).exec((err,categorybooks) =>{
      if (err) return handleError(err);
         res.json(categorybooks);
    })
  
   
})

//finding newreleases based on date

app.get('/newreleases', (req,res)=>{
   book.find().sort( { publishedDate: -1 } ).limit(10).exec((err,newreleases) =>{
    if (err) return handleError(err);
       res.json(newreleases);
  })
   
  
})

//posting review into the document

app.post('/review',async (req,res)=>{
  console.log(req.body.title);
  let value=req.body.title;
  var userreview={
             name:req.body.name,
             comment:req.body.comment,
             rating:req.body.rating
         }
   await book.findOneAndUpdate(
      {title:value},
      {
          $push:{
              reviews:userreview
          }
      }
      )
  console.log("data pushed")
  res.send("data recieved");
})



app.listen(3000, function() {
    console.log('listening on 3000')
  })