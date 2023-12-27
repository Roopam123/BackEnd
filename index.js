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
app.use(express.static(path.join(__dirname,"public")))


app.listen(port,()=>{
    console.log(`Success! Your app is Running on the ${port}`);
})

app.get('/posts',(req,res)=>{
    let posts = require("./posts")
    res.render("index.ejs",{posts})
})
app.post("/posts",(req,res)=>{
    let {username,content} = req.body
    let posts = require('./posts')
    posts.push({username,content})
    // redirect res.redirect(URL)
    res.redirect('/posts')
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})