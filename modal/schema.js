const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    mentor:{
        type: String,
        
    },
  
    courseHandling:{
        type: String,
        
    } ,
     student:{
        type: String,
    
    },
    courseJoined:{
        type: String,
        
    }
})

module.exports = mongoose.model("assign", Schema)