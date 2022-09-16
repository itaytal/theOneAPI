const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');

const jwtSecrt = "THE_ONE_TOKEN";
const jwtExpiry = "90d"

exports.getAllUsers = async (req, res, next) => {

    const users = await User.find()
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })

}

exports.getUser = async (req, res, next) => { 

    try {
    if(req.headers.authorization){ 
            const token = req.headers.authorization;

            const docoded = await jwt.verify(token, jwtSecrt);
            console.log(docoded);

            const user = await User.findById(docoded.id);
            res.status(200).json({status: "succsess", 
            data: {user} 
            });
        }
    }
    catch (err) { 
        res.status(400).json({status: "fail", message: err } )
   }

    next();
}