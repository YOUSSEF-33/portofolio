import mongoose from "mongoose";
const {Schema} = mongoose;

const clientSchema = new Schema({
    name: String,
    email:String,
    phone_number:{type : String},
    desc: String
},{
    timestamps: true,
})

export const client = new mongoose.model("clients", clientSchema);