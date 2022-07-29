const fs = require('fs');
const express = require('express');
const authController = require('./public/controllers/authController');
const compression = require('compression');


const app = express();

app.use(express.json());

const tours = JSON.parse(fs.readFileSync(`${__dirname}\\public\\data\\tours.json`));


app.use(compression())



//ROUTES
const tourRouter = express.Router();
const userRouter = express.Router();
tourRouter.get('', (req, res) => {    
    res.status(200).json({status: "succsess" , data: tours });
});



userRouter.get('/', (req, res) => { 
    res.status(200).json({status: "succsess"  });
})

userRouter.post('/login', authController.login)

app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users/', userRouter);


const port = process.env.PORT || 3000;
console.log(process.env.PORT)
//const port =  3000;
app.listen(port, () => {

})