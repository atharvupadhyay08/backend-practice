//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
dotenv.config()


import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/dbfile.js";

console.log("Mongo URL is:", process.env.MONGODB_URI);


connectDB()

/*
import express from "express"
const app = express()
(async()=>{
      try{
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error",(error )=>{
                  console.log("ERROR",error);
                  throw error;
            })
          app.listen(process.env.PORT,()=>{
            console.log(`app is on port${process.env.PORT}`)
          })



      }
      catch(error){
            console.error("ERROR",error)
            throw error
      }
})()
      */