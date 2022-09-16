const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const tourRouter = require('./routes/tour-routes');
const userRouter = require('./routes/user-routes');

const app = express();

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
app.use(express.json());



app.use(compression())


app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users/', userRouter);


module.exports = app;
