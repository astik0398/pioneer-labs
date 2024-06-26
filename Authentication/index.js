const { connection } = require("./db")
const express = require('express')
require('dotenv').config()
const {userRouter} = require('./routes/user.route')

const app = express()
app.use(express())
app.use(express.json())

app.use('/', userRouter)

app.listen(process.env.PORT, async()=> {
    try {
        await connection
        console.log('connected to the db');
        console.log('server running on port 9090');
    } catch (error) {
        console.log(error);
    }
})
