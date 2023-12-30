const express = require('express');
const ejs = require("ejs");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(3000,()=>{
    console.log("On")
})