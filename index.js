const express = require("express");
const app = express();
const port = 3000;


app.listen(port,()=>{
    console.log(`Success! Your app is Running on the ${port}`);
})

app.get('/',(req,res)=>{
    res.send("Home")
})