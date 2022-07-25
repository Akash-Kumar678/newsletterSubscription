const express= require("express");
const bodyparser= require("body-parser");
const router = require('./routes/newsletterRoutes')
const app= express();

app.use(bodyparser.urlencoded({extended:false}));
app.use('/',router)

// Failure route
// app.post("/failure",function(req,res){
//    res.redirect("/");
// })

app.listen(8005,function(){
  console.log("server is running on port 8005.");
})