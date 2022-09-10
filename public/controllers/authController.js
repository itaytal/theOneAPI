const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync')

const jwtSecrt = "THE_ONE_TOKEN";
const jwtExpiry = "90d"


exports.signup = async (req, res, next) => {

    try {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });

    const token = jwt.sign( {id: newUser._id, email: body.email}, jwtSecrt,
         { expiresIn: jwtExpiry}
         )

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    })} 
     catch (err) { 
        res.status(400).json({status: "fail", message: err } )
    }
}

exports.login = async(req, res, next) => {

    const {email, password} = req.body;

    if(!email || !password){
       return res.status(401).json({status: "failed"})
    }



    const body = req.body

    const user = await User.findOne({email}).select('+password');


    if(!user || !user.correctPassword(password, user.password)){
        return res.status(401).json({status: "incorrect email or password"});
    }
    
    const token = jwt.sign({id: user._id, email: body.email}, jwtSecrt, {expiresIn: "90d"})
    res.status(200).json({status: "succsess", data: {token: token}  });
   

}