const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const user =  new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    photo: {
        type: String,
    },
    password: { 
        type: String,
        required: [true, 'required'],
        minlength: 8,
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'required'],
        minlength: 8,
        validate: {
            validator: function(el) { 
                return el === this.password
            }
        }
    }

})

user.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hashSync(this.password, 12);
    this.confirmPassword = undefined;
    next();
})

user.methods.correctPassword = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User', user);




module.exports = User;
