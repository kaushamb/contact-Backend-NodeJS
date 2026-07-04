const express= require('express');
const dotenv = require('dotenv').config({quiet : true});
const errorHandler = require("./middleware/errorHandler")

const app= express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/contacts',require("./routes/contactRoutes"))
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Running on Port - ${port}`)
})