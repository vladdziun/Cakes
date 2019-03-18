const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_dashboard', {useNewUrlParser:true});

const 
 ModelSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    url: { 
        type: String, 
        required: true, 
        minlength: 3 
    },
    rating: { 
        type: Number, 
        required: false 
    },
    comment: { 
        type: String, 
        required: false,
        minlength: 3 
    },
}, {timestamps:true});

module.exports = mongoose.model('Model', ModelSchema);