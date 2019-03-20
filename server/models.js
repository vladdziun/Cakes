const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors', {useNewUrlParser:true});

const 
 ModelSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    quotes: {
        type: Array
    }
}, {timestamps:true});

module.exports = mongoose.model('Model', ModelSchema);