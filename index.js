const {config} = require("dotenv")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Model = require("./modal/schema")

config()
const app = express()

app.use(express.json())

app.use(cors())

// connect to db
mongoose.connect("mongodb+srv://Guru:Guru777@cluster0.ke7v2.mongodb.net/student-Mentor?retryWrites=true&w=majority",() => {
    console.log("connected to DB")
})


// creating mentor
app.post("/mentor",async (req,res) => {
    
const mentor = new Model ({
    mentor: req.body.name,
    courseHandling:req.body.courseHandling

})
console.log(mentor)
 await mentor.save()
    res.send("creating Mentor")
})


// creating student
app.post("/student",async (req,res) => {
    const name = req.body.name
    const course = req.body.courseJoined
    const student = new Model ({
        student: name,
        courseJoined: course
    
    })
    console.log(student)
     await student.save()
        res.send("creating student")
    })
    

// Assigning Student to Mentor
app.get("/", async (req,res) => {
try{
    const data = await Model.find({})
    res.send(data)
}catch(err){
    console.log(err)
}
})

app.listen(process.env.PORT || 3000 ,() => {
    console.log("server is Running")
})