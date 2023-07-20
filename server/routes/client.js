import mongoose from "mongoose";
import express from "express";
import { client } from "../models/client.model.js";
const router = express.Router();


router.post("/client", async(req, res)=>{

    try{
        const data = new client(req.body);
         await data.save();
         res.status(201).send("client sent a message");
    }catch(err){
       res.status(503).send(err.message)
    }
})

router.get("/clients", async(req, res)=>{

    try{
        let clientsData = await  client.find({});
        res.status(200).send(clientsData);
    }catch(err){
        res.status(500).send(err.message);
    }
    
})

export default router;