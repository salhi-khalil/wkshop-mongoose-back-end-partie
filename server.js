//1 - import express
const express = require('express')
const connectDb= require('./config/connectDb')
const  route  = require('./routes/contact')
require("dotenv").config()

//2- init the app 

const app = express()
app.use(express.json())
//3- create a port 



connectDb()

app.use('/api/contacts',route)
//4- create a server 

app.listen(process.env.PORT, ()=>console.log(`server listening on port ${process.env.PORT}`))