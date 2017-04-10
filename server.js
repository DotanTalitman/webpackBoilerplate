
var express= require("express");
var app= express();

app.use("/app",express.static("app"));
app.get("/bundle.js",function(req,res){

    res.sendfile(__dirname+"/bundle.js");
});
app.get("/",function(req,res){

    res.sendfile(__dirname+"/index.html");
});

app.listen(3000);