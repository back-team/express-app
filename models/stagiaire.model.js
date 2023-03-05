const mongoose = require("mongoose");

const stagiaireSchema = mongoose.Schema({
    name : String,
    age : {type : Number, min : 18 },
    create_time : {type : Date , default : Date.now}
})

module.exports = (mongoose.model("Stagiaire" , stagiaireSchema));