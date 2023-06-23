const commonMiddleware=(req,res,next)=>{
    console.log("common-middleware is used here");
    next();
    }
    
    module.exports = commonMiddleware;