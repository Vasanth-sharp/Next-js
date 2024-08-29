import mongoose from "mongoose";
import React from 'react'

function DBconnection() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Connected succesfully"))
    .catch((e)=>console.log(e))
}

export default DBconnection