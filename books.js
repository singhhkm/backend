const express=require("express");
const router=express.Router();
const Books=require('../models/Books');
const validate = require("../middleware/validate");
const {body,validationResult}=require('express-validator');




//get all the books
router.get("/",async(req,res)=>{
    // let obj={name:'hey'};
    let success=false;
    try{
        const notes=await Books.find();
        success=true;
        res.json({success,notes});

    } catch (err) {
      console.log(err.message);
    return   res.status(500).json({success,error:"Some internal error has occured. "})
    }
  

})





//add a new  book
router.post("/",  [
    body("Author", "Enter a Author of minimum 3 length").isLength({ min: 3 }),
  
    body("Title", "Title  should atleast 5 characters").isLength({
      min: 5
    }),
  ],async(req,res)=>{
    let success=false;
    // let obj={name:'hey'};
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
        const {Author,Title,tag}=req.body;
        const book=new Books({
            Author,Title,tag,bookid:req.bookid.id
        })
        const books=await book.save();
        success=true;
        res.status(200).json({success,books});

       
    } catch (err) {
      console.log(err.message);
   return   res.status(500).json({success,error:"Some internal error has occured. "})
    }
  

})


//update books
router.put("/:id",validate,async(req,res)=>{
    // let obj={name:'hey'};
   let success=false;
    try{
        const {Author,Title,tag}=req.body;
        const newbook={};
        
        if(Title){newbook.Title=Title}
        if(Author){newbook.Author=Author}
        if(tag){newbook.tag=tag}
      
       
        //find the note to be updated and update it
        let book=await Books.findById(req.params.id);
        if(!book){
            res.json({success,error:"The corrresponding book is not found in the database."})
        }
        if(book.bookid.toString()!==req.bookid.id){
            if(!book){
            return    res.json({success,error:"This operation is not allowed.mismatched IDs"})
            }

        }
        note=await Books.findByIdAndUpdate(req.params.id,{$set:newbook},{new:true});
        success=true;
        res.json({success,note});

       
    } catch (err) {
      console.log(err.message);
    return   res.status(500).json({success,error:"Some internal error has occured. "})
    }
  

})




module.exports=router