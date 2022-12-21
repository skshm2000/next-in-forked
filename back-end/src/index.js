require("dotenv").config();
const express= require("express");
const cors= require("cors");
const http =  require('http')
const connect = require("./config/db");
const PORT= process.env.PORT;
const AuthRoute = require('./routes/auth.route') 

const app= express();
const server = http.createServer(app)
app.use(express.json());
app.use(cors());
app.use('/auth', AuthRoute)

app.get("/", (req, res)=>{
    res.status(200).send('Server Started!')
})


 
server.listen(PORT,async()=>{
    await connect();
    console.log(`listening at http://localhost:${PORT}`)
})
