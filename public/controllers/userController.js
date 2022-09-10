const User = require('./../models/userModel');



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

exports.getUser = async (req, res) => { 

    const user = await User.findById(req.params.id);

    res.status(200).json({status: "succsess", 
      data: {user} 
    });
}