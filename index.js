const express = require("express")

const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app= express();
const PORT = 3000;

// const userLogsModel= require('./models/userLogsModels')
app.use("/tmp" , express.static('tmp'))

const cors = require('cors');
mongoose.set('strictQuery' , false)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

require('dotenv').config()


//connect to db
 const db =mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);



//middleware
app.use(express.json());



app.use("/user" , require("./routes/userRoute"))
app.use("/admin" , require("./routes/adminRoute"))
app.use("/animal_record" , require("./routes/animalRecordRoute"))




// //
// app.post("/user/logout",(req,res)=>
// {
//   const userId= req.body.userId;
  
//   const userLog= new userLogsModel({
//     _id:mongoose.Types.ObjectId(),
//     user_id:userId,
//     ip:req.body.ip,
//     country:req.body.country,
//     logType:"logout"
//   })

//   userLog.save(function(err,result){
//     if(result){
//       res.json({
//         message: "user Logout record maintained",
//         result:result,
//         message: "after calling this api delete user jwt token stored in cookies ,local storage from front end"
//       })
//     }
//     else{
//       console.log("Error in saving logs")
//     }
//   })

 
// })

// const cloudinary = require("./utils/cloudinary")


module.exports = db;

const server= app.listen(3000 || process.env.PORT, function () {
    console.log("server started on port 3000")
})