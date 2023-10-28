const mongoose = require("mongoose");

const qSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        requied:true
    },
    options:{
        type:[String],
        requied:true
    },
    details:{   // contains rightOption, level and language
        type:[String],
        required:true
    }
})


module.exports = mongoose.model("question", qSchema);