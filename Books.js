const mongoose=require('mongoose');
const {Schema}=mongoose;
//creating schemas using moongose

const Booksschema=new Schema({
    user:{
        //like foreign key
        type:mongoose.Schema.Types.ObjectId,
        ref:'bookid'

    },
    Author:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true,
        
    },
    tag:{
        type:String,
        default:'General'
    },
    date:{
        type:Date,
        default:Date.now
    },

})
//this is to export schemas model at first is model name then schema;
module.exports=mongoose.model('Books',Booksschema);