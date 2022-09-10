const mongoose = require('mongoose');

const tour = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'required']
    }
})

const Tour = mongoose.model('Tour', tour);

module.exports = Tour;