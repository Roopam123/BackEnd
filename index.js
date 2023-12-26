const express = require("express");
const app = express();
const port = 3000;
const path = require("path")


// middleware for the read the incoming responce
app.use(express.urlencoded({extended:true}))
// set view engine
app.set("view engine","ejs")
// set views folder
app.set("views",path.join(__dirname,"views"))
// set public folder
app.set(express.static(path.join(__dirname,"public")))


app.listen(port,()=>{
    console.log(`Success! Your app is Running on the ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Your app is working successfully")
})