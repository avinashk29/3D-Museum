const User = require('../model/user');

// Signup the user
exports.signup = (req,res,next) => {
    User.find({email: req.body.email}).then((result) => {
        if(result.length){
            return res.send("User Already Exists");
        }
        const user = new User({
            email: req.body.email,
            password: User.hashPassword(req.body.password),
            name: req.body.name
        });
        user.save().then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    })

}

// Log in the user
exports.login = (req,res,next) => {
    User.findOne({email: req.body.email}).then((result) => {
        if(!result){
            return res.send("User dose not exits");
        }
        return res.send(result);
    })
}

// Get the user
exports.getUser = (req,res,next) => {
    var id = req.params.userId
    User.findById({_id: id}).then((result) => {
        return res.send(result);
    }).catch(err =>{
        res.send("No Such User Exists");
    })
}






