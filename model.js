const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const { type } = require('os');
const {boolean} = require('webidl-conversions');

const ToDo=  mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim : true 
    },
    completed: {
        type: Boolean,
        default: true
    },
    priority: {
        type: tring,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    dueDate: {
        type: Date,
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('ToDo', ToDo);