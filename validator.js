const JWT=require('jsonwebtoken');
const JWT_SECRET="ibook"
const validate=(req,res,next)=>{
    //get the user from jwt token add id to req object

    const token=req.header('auth-token');
    if(!token){
        res.status(401).json({error:"please authenticate using a valid token"})
    }
    try{
        const data =JWT.verify(token,JWT_SECRET);
        req.bookid=data.bookid;
        next();

    }catch{

        res.status(401).json({error:"please authenticate using a valid token"})
    }
   

  


}
module.exports=validate
