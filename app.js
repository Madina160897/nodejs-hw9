const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const phonesRouter = require("./routers/phonesRouter")

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://madina160897:madina@cluster0.tshfre4.mongodb.net/?retryWrites=true&w=majority', (err) =>{
    if(err) {
        console.log("ERROR", err);
    } else {
        console.log("server started");
        app.use("/phones", phonesRouter);
        app.listen(8080)
    }
})

