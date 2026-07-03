const express= require('express');
const dotenv = require('dotenv').config({quiet : true});
const app= express();

const port = process.env.PORT || 5000;

app.use('/api/contacts',require("./routes/contactRoutes"))

app.listen(port,()=>{
    console.log(`Running on Port - ${port}`)
})