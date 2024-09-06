const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use('*',cors({
    origin:'http://localhost:3000',
    credentials: true
}
))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

// new add h..
//const deliveryRoute = require('./routes/deliveryRoute');
//app.use('/api/delivery', deliveryRoute);

//app.use("/api", deliveryRoute);



const PORT =  process.env.PORT || 3001


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})