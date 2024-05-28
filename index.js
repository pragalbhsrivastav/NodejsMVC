const express = require("express");
const fs = require("fs")

const { connectMongoDB } = require('./connection');
const { logReqRes } = require('./middleware');

//connection
connectMongoDB("mongodb://127.0.0.1:27017/demoapp")

const userRouter = require("./routes/user");

const app = express();
const PORT = 8000

// Routes

// middleware
app.use(express.urlencoded({extended: false}))
app.use(logReqRes("log/.txt"))

app.use("/users", userRouter)


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`))