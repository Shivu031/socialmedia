const connectToMongo = require('./db');
const express = require('express');
const multer = require('multer');
const path = require("path");
const fs  = require('fs');

connectToMongo();

const app = express()
const port = 5000
app.use(express.json())

app.use("/images",express.static(path.join(__dirname,"public/images")));


// middleware
const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
  app.use(logMiddleware);

// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))
app.use('/api/posts',require('./routes/posts'))

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"backend/public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).json("File uploaded successfully")
    }catch(err){
        console.log(err);
    }
})

app.get('/',(req,res)=>{
    res.send("Hello Shivu")
})

app.listen(port,()=>{
    console.log(`App is listening at http://127.0.0.1:${port}`)
})