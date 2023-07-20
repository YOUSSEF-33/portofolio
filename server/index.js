import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import clientRouter from "./routes/client.js"


const app = express();
const url = "mongodb+srv://yatef57:youssef33atef@database.h8zfa69.mongodb.net/?retryWrites=true&w=majority"
app.use(cors());
app.use(express.json());

app.use("/", clientRouter);
mongoose.connect(url)
.then(()=>{
    console.log('Connected to database');
    app.listen(5000, ()=>{
        console.log("Server is running on port http://localhost:5000");
    })
})
.catch((err)=>{
    console.log(err)
})




