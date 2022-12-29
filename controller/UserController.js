exports.getUser = (req,res,next)=>{
    res.send({'name':'Haider Ali'});
}

exports.postUsers = (req,res,next)=>{
    const {name,mobile} = req.body;
    res.send({
        name,
        mobile
    })
}
