const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_name: {
        type: String
    },
    todo_email: {
        type: String
    },
    todo_phone: {
        type: String
    },
    todo_priority: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);