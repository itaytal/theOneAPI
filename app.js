const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const authController = require('./public/controllers/authController');

const tourRouter = require('./routes/tour-routes');
const userRouter = require('./routes/user-routes');
const app = express();

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.json());



app.use(compression())


//ROUTES

//const userRouter = express.Router();


// const getAllUsers = (req, res) => {
//     res.status(200).json({status: "succsess"  });
//  }


// const createUser = (req, res) => {}
// const getUser = (req, res) => { }
// const updateUser = (req, res) => {}
// const deleteUser = (req, res) => { }


// userRouter.route('/').get(getAllUsers).post(createUser);

// userRouter.route('/:v1').get(getUser).patch(updateUser).delete(deleteUser);

// userRouter.post('/login', authController.login)

app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users/', userRouter);


module.exports = app;
