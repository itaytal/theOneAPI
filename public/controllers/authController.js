const jwt = require('jsonwebtoken');

const jwtSecrt = "THE_ONE_TOKEN";

exports.login =   (req, res, next) => {

    const body = req.body

    if(body.email === "barakbenhur@gmail.com" && body.password === "12345678"){

        const token = jwt.sign({id: 1, email: body.email}, jwtSecrt, {expiresIn: "90d"})
        res.status(200).json({status: "succsess", data: {token: token}  });
    }
    else {
        res.status(401).json({status: "failed"})
    }

}