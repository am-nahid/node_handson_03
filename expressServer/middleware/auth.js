const auth=(req,res,next)=>{
console.log("auth-middleware is used here");
next();
}

module.exports = auth;