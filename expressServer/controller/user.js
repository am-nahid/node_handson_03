const signin=(req,res)=>{
    res.send({
        signin:"signin"
    })
}


const login=(req,res)=>{
    res.send({
        signin:"login"
    })
}



const aboutus=(req,res)=>{
    res.send({
        signin:"aboutus"
    })
}

const contactus=(req,res)=>{
    res.send({
        signin:"contactus"
    })
}

module.exports = {contactus, aboutus, login, signin}
