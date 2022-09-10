const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

//console.log(process.env);
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(con => {
    console.log("success to connect DB");
});

//START SERVER
const port = process.env.PORT || 3000;

//const port =  3000;
app.listen(port, () => {});
