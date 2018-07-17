const mongoClient = require('mongodb');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const PORT = 8000
const api = require('./routes/api')
const app = express()
app.use(cors())


app.use(bodyParser.json())
app.use('/api',api)


app.get('/',function(req,res){
    response.send("Server  Running")
})

app.listen(PORT,function(){
    console.log("Server running on Port ",PORT)
})
