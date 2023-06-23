const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 5000
app.use(express.json())

const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
  app.use(logMiddleware);

// Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))
app.use('/api/posts',require('./routes/posts'))

app.get('/',(req,res)=>{
    res.send("Hello Shivu")
})

app.listen(port,()=>{
    console.log(`App is listening at http://127.0.0.1:${port}`)
})